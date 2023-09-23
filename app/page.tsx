import Contact from '@/components/molecules/Contact'
import Hero from '@/components/organism/Hero'
import SelectedWorks from '@/components/organism/SelectedWorks'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <SelectedWorks />
      <Contact />
    </main>
  )
}
