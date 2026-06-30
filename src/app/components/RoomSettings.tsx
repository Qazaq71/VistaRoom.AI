'use client'

import { useState } from 'react'

// ─── Static data ──────────────────────────────────────────────────────────────

const TILE_ROOMS = ['kitchen', 'bathroom', 'toilet']

const LIGHTING_CARDS = [
  { key: 'natural',    label: 'Дневной свет', icon: '☀️' },
  { key: 'warm',       label: 'Тёплый',       icon: '🕯️' },
  { key: 'recessed',   label: 'Точечные',     icon: '💡' },
  { key: 'chandelier', label: 'Люстра',       icon: '🔆' },
  { key: 'pendant',    label: 'Пендант',      icon: '🪔' },
  { key: 'strip',      label: 'LED лента',    icon: '〰️' },
]

const TILE_CARDS = [
  { hex: '#FFFFFF', label: 'Белый',      key: 'tile_white' },
  { hex: '#D9D9D9', label: 'Светлый',    key: 'tile_lgrey' },
  { hex: '#9E9E9E', label: 'Серый',      key: 'tile_grey' },
  { hex: '#37474F', label: 'Антрацит',   key: 'tile_dark' },
  { hex: '#90CAF9', label: 'Голубой',    key: 'tile_blue' },
  { hex: '#4DB6AC', label: 'Бирюзовый',  key: 'tile_teal' },
  { hex: '#66BB6A', label: 'Зелёный',    key: 'tile_green' },
  { hex: '#C97B63', label: 'Терракота',  key: 'tile_terra' },
  { hex: '#8D6E63', label: 'Коричневый', key: 'tile_brown' },
  { hex: '#F0EDE8', label: 'Мрамор',     key: 'tile_marble' },
]

const TILE_ZONE_LABELS: Record<string, string> = {
  kitchen_backsplash: 'Фартук кухни',
  kitchen_floor:      'Пол кухни',
  bath_walls:         'Стены ванной',
  bath_floor:         'Пол ванной',
  toilet_walls:       'Стены туалета',
  toilet_floor:       'Пол туалета',
  shower:             'Душевая зона',
  tub_surround:       'Вокруг ванны',
}

const FURNITURE_CARDS = [
  { key: 'sofa',         label: 'Диван',        icon: '🛋️' },
  { key: 'bed',          label: 'Кровать',       icon: '🛏️' },
  { key: 'dining_table', label: 'Стол',          icon: '🍽️' },
  { key: 'desk',         label: 'Рабочий стол',  icon: '💻' },
  { key: 'wardrobe',     label: 'Шкаф',          icon: '🗄️' },
  { key: 'tv_unit',      label: 'ТВ-зона',       icon: '📺' },
  { key: 'armchair',     label: 'Кресло',        icon: '🪑' },
  { key: 'bookshelf',    label: 'Стеллаж',       icon: '📚' },
  { key: 'kitchen_set',  label: 'Кухня',         icon: '🍳' },
  { key: 'bathtub',      label: 'Ванна',         icon: '🛁' },
  { key: 'shower_cabin', label: 'Душ',           icon: '🚿' },
]

const APPLIANCE_CARDS = [
  { key: 'fridge',     label: 'Холодильник', icon: '🧊' },
  { key: 'stove',      label: 'Плита',       icon: '🔥' },
  { key: 'hood',       label: 'Вытяжка',     icon: '💨' },
  { key: 'oven',       label: 'Духовка',     icon: '🫕' },
  { key: 'dishwasher', label: 'Посудомойка', icon: '🍴' },
  { key: 'washer',     label: 'Стиралка',    icon: '👕' },
  { key: 'ac',         label: 'Кондиционер', icon: '❄️' },
  { key: 'tv',         label: 'Телевизор',   icon: '📺' },
  { key: 'coffee',     label: 'Кофемашина',  icon: '☕' },
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

export interface RoomSettingsProps {
  room: string
  lighting: string[]
  setLighting: (v: string[]) => void
  tilezone?: string[]
  setTilezone?: (v: string[]) => void
  tileColorHex?: string
  setTileColorHex?: (v: string) => void
  furniture: string[]
  setFurniture: (v: string[]) => void
  appliances: string[]
  setAppliances: (v: string[]) => void
  extraNotes: string
  setExtraNotes: (v: string) => void
  isMyStyle: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function RoomSettings({
  room,
  lighting, setLighting,
  tilezone = [], setTilezone,
  tileColorHex = '#FFFFFF', setTileColorHex,
  furniture, setFurniture,
  appliances, setAppliances,
  extraNotes, setExtraNotes,
  isMyStyle,
}: RoomSettingsProps) {
  const [open, setOpen] = useState(false)

  const toggleArr = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const showTileZone = TILE_ROOMS.includes(room)

  // Wizard «Мой стиль» будет перенесён сюда — пока рендер на стороне page.tsx
  if (isMyStyle) return null

  return (
    <>
      <button className="details-toggle" onClick={() => setOpen(o => !o)}>
        {open ? '▾ Скрыть детали' : '▸ Дополнительные настройки'}
      </button>

      {open && (
        <div className="details-block">
          <div className="details-body">

            {/* Lighting */}
            <div>
              <div className="field-label" style={{ marginBottom: 8 }}>Освещение</div>
              <div className="swatch-grid">
                {LIGHTING_CARDS.map(l => (
                  <SwatchCard key={l.key} label={l.label} icon={l.icon}
                    selected={lighting.includes(l.key)}
                    onClick={() => toggleArr(lighting, setLighting, l.key)} small />
                ))}
              </div>
            </div>

            {/* Tile zones — кухня / ванная / туалет */}
            {showTileZone && setTilezone && (
              <div style={{ marginTop: 16 }}>
                <div className="field-label" style={{ marginBottom: 8 }}>Зоны плитки</div>
                <div className="swatch-grid" style={{ marginBottom: 10 }}>
                  {Object.entries(TILE_ZONE_LABELS)
                    .filter(([k]) => {
                      if (room === 'kitchen')  return k.startsWith('kitchen')
                      if (room === 'bathroom') return ['bath_walls', 'bath_floor', 'shower', 'tub_surround'].includes(k)
                      if (room === 'toilet')   return k.startsWith('toilet')
                      return false
                    })
                    .map(([k, label]) => (
                      <SwatchCard key={k} label={label}
                        selected={tilezone.includes(k)}
                        onClick={() => toggleArr(tilezone, setTilezone!, k)} small />
                    ))}
                </div>
                {tilezone.length > 0 && setTileColorHex && (
                  <>
                    <div className="field-label" style={{ marginBottom: 6 }}>Цвет плитки</div>
                    <div className="swatch-grid">
                      {TILE_CARDS.map(t => (
                        <SwatchCard key={t.key} label={t.label} hex={t.hex}
                          selected={tileColorHex === t.hex}
                          onClick={() => setTileColorHex(t.hex)} small />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Furniture */}
            <div style={{ marginTop: 16 }}>
              <div className="field-label" style={{ marginBottom: 4 }}>Мебель в кадре</div>
              <div className="adv-hint" style={{ marginBottom: 8 }}>Что должно быть в готовом дизайне</div>
              <div className="swatch-grid">
                {FURNITURE_CARDS.map(f => (
                  <SwatchCard key={f.key} label={f.label} icon={f.icon}
                    selected={furniture.includes(f.key)}
                    onClick={() => toggleArr(furniture, setFurniture, f.key)} small />
                ))}
              </div>
            </div>

            {/* Appliances */}
            <div style={{ marginTop: 16 }}>
              <div className="field-label" style={{ marginBottom: 8 }}>Техника</div>
              <div className="swatch-grid">
                {APPLIANCE_CARDS.map(a => (
                  <SwatchCard key={a.key} label={a.label} icon={a.icon}
                    selected={appliances.includes(a.key)}
                    onClick={() => toggleArr(appliances, setAppliances, a.key)} small />
                ))}
              </div>
            </div>

            {/* Extra notes */}
            <div style={{ marginTop: 16 }}>
              <div className="field-label" style={{ marginBottom: 6 }}>Дополнительно</div>
              <textarea className="detail-textarea"
                placeholder="Например: много растений, рабочее место у окна..."
                value={extraNotes}
                onChange={e => setExtraNotes(e.target.value)}
                rows={2} />
            </div>

          </div>
        </div>
      )}
    </>
  )
}
