import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar.component'

export const metadata: Metadata = {
  title: 'Smite Meta',
  description: 'Making Smite easier than ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
