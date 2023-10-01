import Navbar from '@/components/organism/Navbar'
import '@/style/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/organism/Footer'
import ThemeProvider from '@/components/providers/ThemeProvider'
import TanstackProvider from '@/components/providers/TanstackProvider'

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
        <TanstackProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
