import Navbar from '@/components/organism/Navbar'
import '@/style/globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import Footer from '@/components/organism/Footer'

export const metadata: Metadata = {
  title: 'Dwi Fitriana | Front-End Developer',
  description: `A passionate front-end developer dedicated to transforming ideas into captivating digital
  experiences. With a focus on crafting modern web, I thrive in turning visions into reality
  through creative design.`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
