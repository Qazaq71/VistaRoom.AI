import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SpaceAI — ИИ-дизайн интерьеров',
  description: 'Преобразите ваш офис, кафе или квартиру с помощью ИИ за 30 секунд. Без дизайнера.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
