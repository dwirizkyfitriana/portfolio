import About from '@/components/molecules/About'
import Contact from '@/components/molecules/Contact'
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
