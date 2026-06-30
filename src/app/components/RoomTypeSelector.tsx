'use client'

const ROOM_LABELS: Record<string, string> = {
  living: 'Гостиная', bedroom: 'Спальня', kitchen: 'Кухня',
  bathroom: 'Ванная', toilet: 'Туалет', office: 'Офис',
  kids: 'Детская', cafe: 'Кафе', shop: 'Магазин', salon: 'Салон',
}

interface RoomTypeSelectorProps {
  selectedRoomType: string
  onRoomTypeChange: (roomType: string) => void
}

export default function RoomTypeSelector({ selectedRoomType, onRoomTypeChange }: RoomTypeSelectorProps) {
  return (
    <div>
      <div className="field-label">Тип помещения</div>
      <div className="chips">
        {Object.entries(ROOM_LABELS).map(([k, label]) => (
          <button
            key={k}
            className={`chip${selectedRoomType === k ? ' active' : ''}`}
            onClick={() => onRoomTypeChange(k)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
