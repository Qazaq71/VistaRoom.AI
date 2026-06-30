'use client'

import { useState, useEffect } from 'react'

const STYLE_DISPLAY: Record<string, { label: string; emoji: string; preview?: string; desc?: string }> = {
  my_style:          { label: 'Мой стиль',        emoji: '🎨', desc: 'Настройте всё сами: материалы, цвета, освещение' },
  minimalist:        { label: 'Минимализм',        emoji: '⬜', desc: 'Чистые линии, нейтральные тона, только самое необходимое', preview: 'https://images.unsplash.com/photo-1586023492125-27264fee7bef?w=360&q=80&auto=format&fit=crop' },
  scandinavian:      { label: 'Скандинавский',     emoji: '🌲', desc: 'Светлые тона, натуральное дерево, функциональность', preview: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=360&q=80&auto=format&fit=crop' },
  japandi:           { label: 'Japandi',            emoji: '🍃', desc: 'Гибрид японской и скандинавской эстетики', preview: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=360&q=80&auto=format&fit=crop' },
  luxury:            { label: 'Luxury',             emoji: '✨', desc: 'Богатые материалы, золотые акценты, изысканный декор', preview: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=360&q=80&auto=format&fit=crop' },
  artdeco:           { label: 'Art Deco',           emoji: '🔶', desc: 'Геометрические узоры, металлический блеск, роскошь', preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=360&q=80&auto=format&fit=crop' },
  biophilic:         { label: 'Biophilic',          emoji: '🌿', desc: 'Живые растения, природные материалы, связь с природой', preview: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=360&q=80&auto=format&fit=crop' },
  mediterranean:     { label: 'Mediterranean',      emoji: '🌅', desc: 'Тёплые тона, терракота, средиземноморский уют', preview: 'https://images.unsplash.com/photo-1600210492493-0fd9b353b6e4?w=360&q=80&auto=format&fit=crop' },
  loft:              { label: 'Loft',               emoji: '🏭', desc: 'Открытые кирпич и бетон, высокие потолки, raw-эстетика', preview: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=360&q=80&auto=format&fit=crop' },
  cyberpunk:         { label: 'Киберпанк',          emoji: '🌆', desc: 'Неон, тёмные поверхности, футуристичный стиль' },
  organic_modern:    { label: 'Organic Modern',     emoji: '🌱', desc: 'Натуральные материалы, тёплые оттенки и природная эстетика', preview: 'https://images.unsplash.com/photo-1586023492125-27264fee7bef?w=360&q=80&auto=format&fit=crop' },
  contemporary:      { label: 'Contemporary',       emoji: '🏙️', desc: 'Актуальный интерьер с чистыми линиями и функциональностью', preview: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=360&q=80&auto=format&fit=crop' },
  mid_century:       { label: 'Mid-Century',        emoji: '🪑', desc: 'Стиль 50–60-х с деревянной мебелью и геометрией', preview: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=360&q=80&auto=format&fit=crop' },
  boho:              { label: 'Boho',               emoji: '🪷', desc: 'Текстиль, растения, этнические элементы и творческая свобода', preview: 'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=360&q=80&auto=format&fit=crop' },
  coastal:           { label: 'Coastal',            emoji: '🌊', desc: 'Светлый прибрежный интерьер в морской цветовой гамме', preview: 'https://images.unsplash.com/photo-1600210492493-0fd9b353b6e4?w=360&q=80&auto=format&fit=crop' },
  neoclassical:      { label: 'Neoclassical',       emoji: '🏛️', desc: 'Современная интерпретация классического роскошного интерьера', preview: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=360&q=80&auto=format&fit=crop' },
  wabi_sabi:         { label: 'Wabi-Sabi',          emoji: '🍵', desc: 'Японская эстетика естественности и несовершенства', preview: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=360&q=80&auto=format&fit=crop' },
  modern_farmhouse:  { label: 'Modern Farmhouse',   emoji: '🌾', desc: 'Уютный деревенский стиль с натуральными материалами', preview: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=360&q=80&auto=format&fit=crop' },
  maximalism:        { label: 'Maximalism',         emoji: '🎭', desc: 'Яркие цвета, насыщенный декор и выразительные акценты', preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=360&q=80&auto=format&fit=crop' },
  industrial:        { label: 'Industrial',         emoji: '⚙️', desc: 'Металл, бетон, кирпич и индустриальная эстетика', preview: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=360&q=80&auto=format&fit=crop' },
  japanese_zen:      { label: 'Japanese Zen',       emoji: '🎋', desc: 'Спокойный минималистичный интерьер для медитации', preview: 'https://images.unsplash.com/photo-1540574163026-643ea20abb28?w=360&q=80&auto=format&fit=crop' },
}

const STYLE_CATEGORIES = [
  {
    id: 'popular',
    label: '⭐ Популярные',
    keys: ['minimalist', 'scandinavian', 'japandi', 'organic_modern', 'contemporary', 'mid_century', 'boho', 'coastal'],
  },
  {
    id: 'premium',
    label: '💎 Премиум',
    keys: ['luxury', 'artdeco', 'neoclassical'],
  },
  {
    id: 'nature',
    label: '🌿 Природа и уют',
    keys: ['biophilic', 'mediterranean', 'wabi_sabi', 'modern_farmhouse'],
  },
  {
    id: 'trendy',
    label: '🚀 Трендовые и необычные',
    keys: ['loft', 'cyberpunk', 'maximalism', 'industrial', 'japanese_zen'],
  },
]

const STYLE_FILTERS = [
  { id: 'all',      label: 'Все' },
  { id: 'popular',  label: 'Популярные' },
  { id: 'premium',  label: 'Премиум' },
  { id: 'nature',   label: 'Природа и уют' },
  { id: 'trendy',   label: 'Трендовые' },
  { id: 'personal', label: 'Персонализация' },
]

interface StylePickerProps {
  selectedStyle: string
  onStyleChange: (style: string) => void
}

export default function StylePicker({ selectedStyle, onStyleChange }: StylePickerProps) {
  const [styleSearch, setStyleSearch]     = useState('')
  const [styleFilter, setStyleFilter]     = useState('all')
  const [collapsedCats, setCollapsedCats] = useState<Set<string>>(new Set())

  // Tooltip positioning — fixed coords so tooltip never clips off-screen on mobile
  useEffect(() => {
    const TOOLTIP_W = 180
    const MARGIN    = 8

    function position(wrap: HTMLElement) {
      const tip = wrap.querySelector<HTMLElement>('.style-tooltip')
      if (!tip) return

      const onEnter = () => {
        const rect = wrap.getBoundingClientRect()
        const vw   = window.innerWidth
        let left   = rect.left + rect.width / 2 - TOOLTIP_W / 2
        left       = Math.max(MARGIN, Math.min(left, vw - TOOLTIP_W - MARGIN))
        const top  = rect.top - tip.offsetHeight - 10
        const finalTop = top < MARGIN ? rect.bottom + 10 : top
        tip.style.left = left + 'px'
        tip.style.top  = finalTop + 'px'

        const arrowLeft        = rect.left + rect.width / 2 - left
        const arrowLeftClamped = Math.max(12, Math.min(arrowLeft, TOOLTIP_W - 12))
        tip.style.setProperty('--arrow-left', arrowLeftClamped + 'px')
      }

      wrap.addEventListener('mouseenter', onEnter)
      wrap.addEventListener('touchstart', onEnter, { passive: true })
      return () => {
        wrap.removeEventListener('mouseenter', onEnter)
        wrap.removeEventListener('touchstart', onEnter)
      }
    }

    const wraps    = Array.from(document.querySelectorAll<HTMLElement>('.style-chip-wrap'))
    const cleanups = wraps.map(position).filter(Boolean) as (() => void)[]
    return () => cleanups.forEach(fn => fn())
  }, [collapsedCats, styleFilter, styleSearch])

  return (
    <div>
      <div className="field-label">Стиль</div>

      {/* Search */}
      <div className="style-search-wrap">
        <input
          type="text"
          className="style-search"
          placeholder="Поиск стиля..."
          value={styleSearch}
          onChange={e => setStyleSearch(e.target.value)}
        />
      </div>

      {/* Category filters */}
      <div className="style-filters">
        {STYLE_FILTERS.map(f => (
          <button
            key={f.id}
            className={`style-filter-btn${styleFilter === f.id ? ' active' : ''}`}
            onClick={() => setStyleFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Category sections */}
      {STYLE_CATEGORIES
        .filter(cat => styleFilter === 'all' || styleFilter === cat.id)
        .map(cat => {
          const visibleKeys = cat.keys.filter(k => {
            const s = STYLE_DISPLAY[k]
            if (!s) return false
            if (!styleSearch) return true
            return s.label.toLowerCase().includes(styleSearch.toLowerCase())
          })
          if (visibleKeys.length === 0) return null
          const isCollapsed = collapsedCats.has(cat.id)
          return (
            <div key={cat.id} className="style-category">
              <button
                className="style-category-header"
                onClick={() => setCollapsedCats(prev => {
                  const next = new Set(prev)
                  next.has(cat.id) ? next.delete(cat.id) : next.add(cat.id)
                  return next
                })}>
                <span className="style-category-title">{cat.label}</span>
                <span className={`style-category-arrow${!isCollapsed ? ' open' : ''}`}>›</span>
              </button>
              {!isCollapsed && (
                <div className="style-grid">
                  {visibleKeys.map(k => {
                    const s = STYLE_DISPLAY[k]!
                    return (
                      <div key={k} className="style-chip-wrap">
                        <button
                          className={`style-chip${selectedStyle === k ? ' active' : ''}`}
                          onClick={() => onStyleChange(k)}>
                          <span className="em">{s.emoji}</span>{s.label}
                        </button>
                        {(s.preview || s.desc) && (
                          <div className="style-tooltip">
                            {s.preview && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={s.preview} alt={s.label} className="style-tooltip-img"
                                loading="eager"
                                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                            )}
                            <div className="style-tooltip-body">
                              <div className="style-tooltip-title">{s.emoji} {s.label}</div>
                              {s.desc && <div className="style-tooltip-desc">{s.desc}</div>}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

      {/* No results */}
      {styleSearch && STYLE_CATEGORIES
        .filter(cat => styleFilter === 'all' || styleFilter === cat.id)
        .every(cat => cat.keys.every(k => {
          const s = STYLE_DISPLAY[k]
          return !s || !s.label.toLowerCase().includes(styleSearch.toLowerCase())
        })) &&
        !('мой стиль'.includes(styleSearch.toLowerCase())) && (
        <div className="style-no-results">Стили не найдены</div>
      )}

      {/* My Style — Персонализация */}
      {(styleFilter === 'all' || styleFilter === 'personal') &&
       (!styleSearch || 'мой стиль'.includes(styleSearch.toLowerCase()) || 'my style'.includes(styleSearch.toLowerCase())) && (
        <div className="style-category">
          <button
            className="style-category-header"
            onClick={() => setCollapsedCats(prev => {
              const next = new Set(prev)
              next.has('personal') ? next.delete('personal') : next.add('personal')
              return next
            })}>
            <span className="style-category-title">🎨 Персонализация</span>
            <span className={`style-category-arrow${!collapsedCats.has('personal') ? ' open' : ''}`}>›</span>
          </button>
          {!collapsedCats.has('personal') && (
            <div className="my-style-chip-wrap" style={{ marginTop: 0 }}>
              <button
                className={`my-style-btn${selectedStyle === 'my_style' ? ' active' : ''}`}
                onClick={() => onStyleChange('my_style')}>
                <span className="my-style-btn-left">
                  <span className="my-style-btn-emoji">🎨</span>
                  <span className="my-style-btn-label">Мой стиль</span>
                </span>
                <span className="my-style-btn-badge">Настройте всё сами</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
