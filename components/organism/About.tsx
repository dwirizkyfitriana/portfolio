import React from 'react'
import ArrowRight from '../icons/ArrowRight'
import Link from 'next/link'
import { constants } from '@/contstants'

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-start w-full mt-28 gap-4 md:gap-8'>
      <h1 className='font-bold text-3xl md:text-5xl'>Get to know me</h1>
      <div className='flex w-full justify-center'>
        <div className=' bg-light-bg dark:bg-dark-bg rounded-xl py-6 px-8 w-full text-justify shadow-xl'>
          <p>{`${constants.ABOUT.INTRO.replace(' {speaker}', '')} ${constants.ABOUT.SKILLS}`}</p>
          <Link
            href='/about'
            role='button'
            className='card-actions justify-start items-center mt-4 w-fit group gap-4'
          >
            <span>Read More</span>
            <ArrowRight className='group-hover:animate-arrow' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
