import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Napoleon Chatbot - HAVO 5 Geschiedenis',
  description: 'Chat met Napoleon Bonaparte - Educatieve AI-chatbot voor HAVO 5 geschiedenis lessen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}