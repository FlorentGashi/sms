import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'School Managment System',
  description: 'School Managment System'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
