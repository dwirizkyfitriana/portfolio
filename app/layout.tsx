import Navbar from '@/components/molecules/Navbar'
import '@/style/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dwi Fitriana',
  description: 'Personal Portfolio of Dwi Fitriana'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='dark'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
