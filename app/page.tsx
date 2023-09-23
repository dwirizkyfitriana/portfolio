import About from '@/components/organism/About'
import Contact from '@/components/organism/Contact'
import Experience from '@/components/organism/Experience'
import Hero from '@/components/organism/Hero'
import SelectedWorks from '@/components/organism/SelectedWorks'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <SelectedWorks />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}
