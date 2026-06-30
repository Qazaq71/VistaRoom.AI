'use client'

import { useCallback } from 'react'

// ─── Static data ──────────────────────────────────────────────────────────────

export const WALL_CARDS = [
  { key: 'paint',       label: 'Белая краска',      hex: '#F5F5F5', colorHex: '#FFFFFF' },
  { key: 'paint',       label: 'Бежевая краска',     hex: '#EFE8D8', colorHex: '#EFE8D8', id: 'paint_beige' },
  { key: 'paint',       label: 'Серая краска',       hex: '#9E9E9E', colorHex: '#9E9E9E', id: 'paint_grey' },
  { key: 'paint',       label: 'Голубая краска',     hex: '#90CAF9', colorHex: '#90CAF9', id: 'paint_blue' },
  { key: 'paint',       label: 'Зелёная краска',     hex: '#81C784', colorHex: '#81C784', id: 'paint_green' },
  { key: 'paint',       label: 'Розовая краска',     hex: '#F48FB1', colorHex: '#F48FB1', id: 'paint_pink' },
  { key: 'paint',       label: 'Терракота',          hex: '#C97B63', colorHex: '#C97B63', id: 'paint_terra' },
  { key: 'paint',       label: 'Антрацит',           hex: '#37474F', colorHex: '#37474F', id: 'paint_dark' },
  { key: 'wallpaper',   label: 'Обои нейтральные',   hex: '#E8E0D0', colorHex: '#EFE8D8' },
  { key: 'wallpaper',   label: 'Обои зелёные',       hex: '#A5C8A0', colorHex: '#81C784', id: 'wp_green' },
  { key: 'wallpaper',   label: 'Обои синие',         hex: '#90CAF9', colorHex: '#5C9FD6', id: 'wp_blue' },
  { key: 'wallpaper',   label: 'Обои жёлтые',        hex: '#FFE033', colorHex: '#FFE033', id: 'wp_yellow' },
  { key: 'brick',       label: 'Кирпич красный',     hex: '#B5533C', colorHex: '#B5533C' },
  { key: 'brick',       label: 'Кирпич белый',       hex: '#EDE8E0', colorHex: '#EDE8E0', id: 'brick_white' },
  { key: 'microcement', label: 'Микроцемент серый',  hex: '#8D8D8D', colorHex: '#8D8D8D' },
  { key: 'microcement', label: 'Микроцемент беж',    hex: '#C4B9A8', colorHex: '#C4B9A8', id: 'mc_beige' },
  { key: 'plaster',     label: 'Штукатурка белая',   hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'plaster',     label: 'Штукатурка беж',     hex: '#D4C5B0', colorHex: '#D4C5B0', id: 'pl_beige' },
  { key: 'wood',        label: 'Дерево светлое',     hex: '#D4B896', colorHex: '#D4B896' },
  { key: 'wood',        label: 'Дерево тёмное',      hex: '#6B4226', colorHex: '#6B4226', id: 'wood_dark' },
  { key: 'marble',      label: 'Мрамор белый',       hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'marble',      label: 'Мрамор чёрный',      hex: '#2C2C2C', colorHex: '#2C2C2C', id: 'mb_black' },
  { key: 'concrete',    label: 'Бетон серый',        hex: '#888888', colorHex: '#888888' },
]

export const FLOOR_CARDS = [
  { key: 'light_parquet', label: 'Паркет светлый',    hex: '#D4B896', colorHex: '#D4B896' },
  { key: 'dark_parquet',  label: 'Паркет тёмный',     hex: '#5C3D1E', colorHex: '#5C3D1E' },
  { key: 'laminate',      label: 'Ламинат дуб',       hex: '#C8A87A', colorHex: '#C8A87A' },
  { key: 'laminate',      label: 'Ламинат серый',     hex: '#9E9E9E', colorHex: '#9E9E9E', id: 'lam_grey' },
  { key: 'marble',        label: 'Мрамор белый',      hex: '#F0EDE8', colorHex: '#F0EDE8' },
  { key: 'ceramic_tile',  label: 'Плитка серая',      hex: '#B0B0B0', colorHex: '#B0B0B0' },
  { key: 'ceramic_tile',  label: 'Плитка бежевая',    hex: '#D4B896', colorHex: '#D4B896', id: 'ct_beige' },
  { key: 'concrete',      label: 'Бетон',             hex: '#888888', colorHex: '#888888' },
  { key: 'porcelain',     label: 'Керамогранит светл', hex: '#D9D9D9', colorHex: '#D9D9D9' },
  { key: 'porcelain',     label: 'Керамогранит тёмн',  hex: '#37474F', colorHex: '#37474F', id: 'pg_dark' },
  { key: 'carpet',        label: 'Ковёр бежевый',     hex: '#C8B49A', colorHex: '#C8B49A' },
  { key: 'carpet',        label: 'Ковёр серый',       hex: '#8C8C8C', colorHex: '#8C8C8C', id: 'carp_grey' },
]

export const COLOR_SCHEMES = [
  {
    id: 'neutral',
    label: 'Нейтральный',
    desc: 'Белый + светлый паркет',
    swatches: ['#FFFFFF', '#D4B896'],
    wallFinish: 'paint', wallColorHex: '#FFFFFF',
    floorMaterial: 'light_parquet', floorColorHex: '#D4B896',
  },
  {
    id: 'warm_beige',
    label: 'Тёплый бежевый',
    desc: 'Бежевые стены + тёмный дуб',
    swatches: ['#EFE8D8', '#5C3D1E'],
    wallFinish: 'paint', wallColorHex: '#EFE8D8',
    floorMaterial: 'dark_parquet', floorColorHex: '#5C3D1E',
  },
  {
    id: 'nordic',
    label: 'Скандинавский',
    desc: 'Белая штукатурка + светлый ламинат',
    swatches: ['#F0EDE8', '#C8A87A'],
    wallFinish: 'plaster', wallColorHex: '#F0EDE8',
    floorMaterial: 'laminate', floorColorHex: '#C8A87A',
  },
  {
    id: 'sage_green',
    label: 'Зелёный сейдж',
    desc: 'Зелёные стены + дуб',
    swatches: ['#81C784', '#D4B896'],
    wallFinish: 'paint', wallColorHex: '#81C784',
    floorMaterial: 'light_parquet', floorColorHex: '#D4B896',
  },
  {
    id: 'urban_grey',
    label: 'Городской серый',
    desc: 'Микроцемент + бетонный пол',
    swatches: ['#8D8D8D', '#888888'],
    wallFinish: 'microcement', wallColorHex: '#8D8D8D',
    floorMaterial: 'concrete', floorColorHex: '#888888',
  },
  {
    id: 'dark_loft',
    label: 'Тёмный лофт',
    desc: 'Антрацит + тёмный паркет',
    swatches: ['#37474F', '#5C3D1E'],
    wallFinish: 'paint', wallColorHex: '#37474F',
    floorMaterial: 'dark_parquet', floorColorHex: '#5C3D1E',
  },
  {
    id: 'terracotta',
    label: 'Терракота',
    desc: 'Тёплые стены + бежевая плитка',
    swatches: ['#C97B63', '#D4B896'],
    wallFinish: 'paint', wallColorHex: '#C97B63',
    floorMaterial: 'ceramic_tile', floorColorHex: '#D4B896',
  },
  {
    id: 'marble_luxury',
    label: 'Мрамор / люкс',
    desc: 'Белый мрамор везде',
    swatches: ['#F0EDE8', '#F0EDE8'],
    wallFinish: 'marble', wallColorHex: '#F0EDE8',
    floorMaterial: 'marble', floorColorHex: '#F0EDE8',
  },
]

// ─── SwatchCard ───────────────────────────────────────────────────────────────

function SwatchCard({ label, icon, hex, selected, onClick, small }: {
  label: string; icon?: string; hex?: string; selected: boolean; onClick: () => void; small?: boolean
}) {
  return (
    <button
      className={`swatch-card${selected ? ' selected' : ''}${small ? ' small' : ''}`}
      onClick={onClick}
    >
      {hex && (
        <div className="swatch-card-color" style={{
          background: hex,
          border: hex === '#FFFFFF' || hex === '#F5F5F5' || hex === '#F0EDE8' ? '1px solid #ddd' : 'none',
        }} />
      )}
      {icon && !hex && <div className="swatch-card-icon">{icon}</div>}
      <div className="swatch-card-label">{label}</div>
      {selected && <div className="swatch-card-check">✓</div>}
    </button>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface MyStylePaletteProps {
  wallFinish: string[]
  setWallFinish: (val: string[]) => void
  wallColorHex: string
  setWallColorHex: (val: string) => void
  wallFinishKey: string
  setWallFinishKey: (val: string) => void

  floorMaterial: string
  setFloorMaterial: (val: string) => void
  floorColorHex: string
  setFloorColorHex: (val: string) => void
  floorMaterialKey: string
  setFloorMaterialKey: (val: string) => void

  schemeId: string
  setSchemeId: (val: string) => void

  onNext: () => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MyStylePalette({
  wallFinish, setWallFinish,
  wallColorHex, setWallColorHex,
  wallFinishKey, setWallFinishKey,
  floorMaterial, setFloorMaterial,
  floorColorHex, setFloorColorHex,
  floorMaterialKey, setFloorMaterialKey,
  schemeId, setSchemeId,
  onNext,
}: MyStylePaletteProps) {
  const paletteDone = !!(wallFinish.length && floorMaterial)

  const applyScheme = useCallback((scheme: typeof COLOR_SCHEMES[0]) => {
    setSchemeId(scheme.id)
    setWallFinish([scheme.wallFinish])
    setWallColorHex(scheme.wallColorHex)
    const wallCard = WALL_CARDS.find(c => c.key === scheme.wallFinish && c.colorHex === scheme.wallColorHex)
    setWallFinishKey(wallCard ? (wallCard.id || wallCard.key) : scheme.wallFinish)
    setFloorMaterial(scheme.floorMaterial)
    setFloorColorHex(scheme.floorColorHex)
    const floorCard = FLOOR_CARDS.find(c => c.key === scheme.floorMaterial && c.colorHex === scheme.floorColorHex)
    setFloorMaterialKey(floorCard ? (floorCard.id || floorCard.key) : scheme.floorMaterial)
  }, [setSchemeId, setWallFinish, setWallColorHex, setWallFinishKey, setFloorMaterial, setFloorColorHex, setFloorMaterialKey])

  const applyWallCard = useCallback((card: typeof WALL_CARDS[0]) => {
    const cardId = card.id || card.key
    setSchemeId('')
    setWallFinishKey(cardId)
    setWallFinish([card.key])
    setWallColorHex(card.colorHex)
  }, [setSchemeId, setWallFinishKey, setWallFinish, setWallColorHex])

  const applyFloorCard = useCallback((card: typeof FLOOR_CARDS[0]) => {
    const cardId = card.id || card.key
    setSchemeId('')
    setFloorMaterialKey(cardId)
    setFloorMaterial(card.key)
    setFloorColorHex(card.colorHex)
  }, [setSchemeId, setFloorMaterialKey, setFloorMaterial, setFloorColorHex])

  return (
    <div className="wizard-body">

      {/* Ready-made schemes */}
      <div className="field-label" style={{ marginBottom: 8 }}>Готовые палитры — один клик</div>
      <div className="scheme-grid">
        {COLOR_SCHEMES.map(sc => (
          <button
            key={sc.id}
            className={`scheme-card${schemeId === sc.id ? ' selected' : ''}`}
            onClick={() => applyScheme(sc)}
          >
            <div className="scheme-swatches">
              {sc.swatches.map((hex, i) => (
                <div key={i} className="scheme-swatch" style={{
                  background: hex,
                  border: hex === '#F0EDE8' || hex === '#F5F5F5' ? '1px solid #ddd' : 'none',
                }} />
              ))}
            </div>
            <div className="scheme-name">{sc.label}</div>
            <div className="scheme-desc">{sc.desc}</div>
            {schemeId === sc.id && <div className="scheme-check">✓</div>}
          </button>
        ))}
      </div>

      <div className="wizard-divider">или выбери отдельно</div>

      {/* Wall cards */}
      <div className="field-label" style={{ marginBottom: 8 }}>Стены</div>
      <div className="swatch-grid">
        {WALL_CARDS.map(card => {
          const cardId = card.id || card.key
          return (
            <SwatchCard
              key={cardId}
              label={card.label}
              hex={card.hex}
              selected={wallFinishKey === cardId}
              onClick={() => applyWallCard(card)}
              small
            />
          )
        })}
      </div>

      {/* Floor cards */}
      <div className="field-label" style={{ marginBottom: 8, marginTop: 16 }}>Пол</div>
      <div className="swatch-grid">
        {FLOOR_CARDS.map(card => {
          const cardId = card.id || card.key
          return (
            <SwatchCard
              key={cardId}
              label={card.label}
              hex={card.hex}
              selected={floorMaterialKey === cardId}
              onClick={() => applyFloorCard(card)}
              small
            />
          )
        })}
      </div>

      {/* Selection summary */}
      {(wallFinish.length > 0 || floorMaterial) && (
        <div className="selection-summary">
          {wallFinish.length > 0 && (
            <span className="sel-tag">
              <span className="sel-dot" style={{
                background: wallColorHex,
                border: wallColorHex === '#FFFFFF' || wallColorHex === '#F0EDE8' ? '1px solid #ccc' : 'none',
              }} />
              Стены: {WALL_CARDS.find(c => (c.id || c.key) === wallFinishKey)?.label || '—'}
            </span>
          )}
          {floorMaterial && (
            <span className="sel-tag">
              <span className="sel-dot" style={{
                background: floorColorHex,
                border: floorColorHex === '#F0EDE8' || floorColorHex === '#D9D9D9' ? '1px solid #ccc' : 'none',
              }} />
              Пол: {FLOOR_CARDS.find(c => (c.id || c.key) === floorMaterialKey)?.label || '—'}
            </span>
          )}
        </div>
      )}

      {paletteDone && (
        <button className="wizard-next" onClick={onNext}>
          Далее: освещение →
        </button>
      )}
    </div>
  )
}
