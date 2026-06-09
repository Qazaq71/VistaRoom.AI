import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VistaRoom-AI - AI Interior Design',
  description: 'Transform your room with AI interior design in 30 seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
