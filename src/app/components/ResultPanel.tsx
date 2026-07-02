'use client'

import { useState, useRef, useCallback } from 'react'

interface ResultPanelProps {
  outputUrl: string | null
  imagePreview: string | null
  isLoading: boolean
  onDownload: () => void
  onRegenerate: () => void
}

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100))
    setPosition(Math.round(pct))
  }, [])

  const onDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true)
    updatePosition(e.clientX)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [updatePosition])

  const onMove = useCallback((e: React.PointerEvent) => {
    if (isDragging) updatePosition(e.clientX)
  }, [isDragging, updatePosition])

  const onUp = useCallback(() => setIsDragging(false), [])

  const measuredRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      (containerRef as React.MutableRefObject<HTMLDivElement>).current = node
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) setContainerWidth(entry.contentRect.width)
      })
      observer.observe(node)
    }
  }, [])

  return (
    <div ref={measuredRef} className="ba-slider"
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
      style={{ touchAction: 'none' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="After" className="ba-img" draggable={false} />
      <div className="ba-before-clip" style={{ width: position + '%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt="Before" className="ba-before" draggable={false}
          style={{ width: containerWidth > 0 ? containerWidth + 'px' : '100%' }} />
      </div>
      <div className="ba-line" style={{ left: position + '%' }}>
        <div className="ba-handle">
          <div className="ba-arrow-left" /><div className="ba-arrow-right" />
        </div>
      </div>
      <div className="ba-label ba-label-before" style={{ opacity: position > 15 ? 1 : 0 }}>До</div>
      <div className="ba-label ba-label-after"  style={{ opacity: position < 85 ? 1 : 0 }}>После</div>
    </div>
  )
}

export default function ResultPanel({ outputUrl, imagePreview, isLoading, onDownload, onRegenerate }: ResultPanelProps) {
  if (!outputUrl) return null

  return (
    <div className="result-wrap show">
      <div className="field-label">Результат — перетащите линию для сравнения</div>
      {imagePreview
        ? <BeforeAfterSlider before={imagePreview} after={outputUrl} />
        : /* eslint-disable-next-line @next/next/no-img-element */
          <img src={outputUrl} alt="Result" className="result-img" />}
      <div className="result-actions">
        <button className="btn-dl" onClick={onDownload}>↓ Скачать</button>
        <button className="btn-regen" onClick={onRegenerate} disabled={isLoading}>Ещё вариант</button>
      </div>
    </div>
  )
}
