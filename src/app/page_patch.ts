// ── ПАТЧ для page.tsx ────────────────────────────────────────────────────────
//
// ИЗМЕНЕНИЕ 1 — pollPrediction (~строка 552)
// Добавить параметр statusUrl, передавать его в /api/poll
//
// БЫЛО:
//   const pollPrediction = useCallback((id: string, plan: string) => {
//     ...
//     const res = await fetch(`/api/poll?id=${id}&plan=${plan}`)
//
// СТАЛО:

const pollPrediction = useCallback((id: string, statusUrl: string | null, plan: string) => {
  let attempts = 0
  pollRef.current = setInterval(async () => {
    attempts++
    if (attempts > 36) {
      clearInterval(pollRef.current!)
      setStatus('error'); setStatusMsg('Превышено время ожидания. Попробуйте снова.')
      return
    }
    try {
      const statusParam = statusUrl
        ? `&statusUrl=${encodeURIComponent(statusUrl)}`
        : ''
      const res  = await fetch(`/api/poll?id=${id}${statusParam}`)
      const data = await res.json()
      if (data.status === 'succeeded' && data.outputUrl) {
        clearInterval(pollRef.current!)
        const watermarked = (plan === 'profi' || plan === 'agency')
          ? data.outputUrl
          : await addWatermark(data.outputUrl)
        setOutputUrl(watermarked); setStatus('done')
      } else if (data.status === 'failed') {
        clearInterval(pollRef.current!)
        setStatus('error'); setStatusMsg(data.error || 'Генерация не удалась.')
      } else {
        setStatusMsg(`Генерирую дизайн... (${Math.min(attempts * 2, 60)} сек)`)
      }
    } catch { /* continue */ }
  }, 5000)
}, [imagePreview, isMyStyle, style, room])

//
// ИЗМЕНЕНИЕ 2 — в функции generate (~строка 616)
// БЫЛО:
//   pollPrediction(data.predictionId, userPlan)
//
// СТАЛО:
//   pollPrediction(data.predictionId, data.statusUrl ?? null, userPlan)
