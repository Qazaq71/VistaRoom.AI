import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { verifyAssetLifecycleCapability, deleteAssetGroup, recordDeletionJournalEntry } = vi.hoisted(() => ({
  verifyAssetLifecycleCapability: vi.fn(),
  deleteAssetGroup: vi.fn(),
  recordDeletionJournalEntry: vi.fn(),
}))
vi.mock('@/lib/assetLifecycle', () => ({ verifyAssetLifecycleCapability }))
vi.mock('@/lib/assetGroupDeletion', () => ({ deleteAssetGroup }))
vi.mock('@/lib/deletionJournal', () => ({ recordDeletionJournalEntry }))

import { DELETE } from './route'

const GROUP_ID = 'g1-0000018f2c3a-11111111-1111-4111-8111-111111111111'

function deleteRequest(headers: Record<string, string> = {}): NextRequest {
  return new NextRequest('http://localhost/api/assets', { method: 'DELETE', headers })
}

describe('DELETE /api/assets — M0.3 request-triggered deletion', () => {
  afterEach(() => {
    verifyAssetLifecycleCapability.mockReset()
    deleteAssetGroup.mockReset()
    recordDeletionJournalEntry.mockReset()
  })

  it('rejects a missing Authorization header before calling the Blob SDK', async () => {
    const res = await DELETE(deleteRequest())
    expect(res.status).toBe(401)
    expect(verifyAssetLifecycleCapability).not.toHaveBeenCalled()
    expect(deleteAssetGroup).not.toHaveBeenCalled()
  })

  it('rejects a malformed Authorization scheme (not Bearer)', async () => {
    const res = await DELETE(deleteRequest({ Authorization: 'Basic dXNlcjpwYXNz' }))
    expect(res.status).toBe(401)
    expect(verifyAssetLifecycleCapability).not.toHaveBeenCalled()
    expect(deleteAssetGroup).not.toHaveBeenCalled()
  })

  it('rejects a forged/invalid token before calling the Blob SDK', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: false })
    const res = await DELETE(deleteRequest({ Authorization: 'Bearer forged.token' }))
    expect(res.status).toBe(401)
    expect(deleteAssetGroup).not.toHaveBeenCalled()
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
  })

  it('rejects an expired token (verifier returns ok: false) before calling the Blob SDK', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: false })
    const res = await DELETE(deleteRequest({ Authorization: 'Bearer expired.token' }))
    expect(res.status).toBe(401)
    expect(deleteAssetGroup).not.toHaveBeenCalled()
  })

  it('deletes only the verified token\'s group — never a group from query/body', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 2, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const req = new NextRequest('http://localhost/api/assets?groupId=some-other-group', {
      method: 'DELETE',
      headers: { Authorization: 'Bearer valid.token' },
    })
    const res = await DELETE(req)

    expect(res.status).toBe(200)
    expect(deleteAssetGroup).toHaveBeenCalledWith(GROUP_ID, 'request')
    expect(deleteAssetGroup).not.toHaveBeenCalledWith('some-other-group', 'request')
  })

  it('is idempotent: a repeat request after deletion still succeeds and re-confirms absence', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 0, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const res = await DELETE(deleteRequest({ Authorization: 'Bearer valid.token' }))

    expect(res.status).toBe(200)
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 0 }),
    )
  })

  it('returns a generic failure (not success) when verification still finds an asset', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: false })

    const res = await DELETE(deleteRequest({ Authorization: 'Bearer valid.token' }))

    expect(res.status).toBe(500)
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
  })

  it('returns a generic failure when deleteAssetGroup throws', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockRejectedValue(new Error('blob outage'))

    const res = await DELETE(deleteRequest({ Authorization: 'Bearer valid.token' }))

    expect(res.status).toBe(500)
    const body = await res.json()
    expect(JSON.stringify(body)).not.toMatch(/blob outage|blob\.vercel-storage/i)
  })

  it('does not report full success when the journal write fails', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockRejectedValue(new Error('journal write failed'))

    const res = await DELETE(deleteRequest({ Authorization: 'Bearer valid.token' }))

    expect(res.status).toBe(500)
  })

  it('never reveals the group id, pathnames or token in the response body', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: GROUP_ID })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const res = await DELETE(deleteRequest({ Authorization: 'Bearer valid.token.value' }))
    const body = await res.json()
    const serialized = JSON.stringify(body)

    expect(serialized).not.toContain(GROUP_ID)
    expect(serialized).not.toContain('valid.token.value')
  })

  it('sets Cache-Control: private, no-store and no wildcard CORS on every response', async () => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: false })
    const res = await DELETE(deleteRequest({ Authorization: 'Bearer bad.token' }))

    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('Access-Control-Allow-Origin')).toBeNull()
  })
})
