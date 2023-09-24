import { constants } from '@/contstants'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='intro'>
      <h1 className='md:hidden'>
        <span>Hi 👋</span>
      </h1>
      <h1>
        <span>I’m</span> Dwi Fitriana
      </h1>
      <p>
        A passionate front-end developer dedicated to transforming ideas into captivating digital
        experiences. With a focus on crafting modern web, I thrive in turning visions into reality
        through creative design.
      </p>
      <div className='btn-container'>
        <Link href={constants.URL.RESUME} target='_blank' className='btn-resume'>
          See my resume
        </Link>
        <Link href={constants.URL.LINKEDIN} target='_blank' className='btn-touch'>
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default Hero
