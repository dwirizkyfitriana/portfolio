'use client'

import AboutParagraph from '@/components/atoms/AboutParagraph'
import GetInTouchBtn from '@/components/atoms/GetInTouchBtn'
import Signature from '@/components/atoms/Signature'
import SpeakerIcon from '@/components/icons/SpeakerIcon'
import PageContainer from '@/components/organism/PageContainer'
import { constants } from '@/contstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  const playName = () => {
    const audio = new Audio('/assets/audio/name.mp3')
    audio.play()
  }

  const introText = constants.ABOUT.INTRO.split('{speaker}').map((part, index, array) => (
    <React.Fragment key={index}>
      {index > 0 && <SpeakerIcon role='button' onClick={playName} />}
      {part}
    </React.Fragment>
  ))

  return (
    <PageContainer title='A little bit about me' subtitle='Who I am and what I do.'>
      <div className='flex flex-col-reverse md:flex-row justify-between w-full gap-8 items-center md:items-start'>
        <div className='w-[90%] md:w-[70%] flex flex-col gap-4'>
          <AboutParagraph title='WHO I AM'>
            {introText} {constants.ABOUT.SKILLS}
          </AboutParagraph>
          <AboutParagraph title='What I Do'>{constants.ABOUT.EXPERIENCE}</AboutParagraph>

          <p className='mt-10 text-lg text-dark-grey text-justify'>
            Feel free to reach out to me. Follow me on{' '}
            <Link href={constants.URL.TWITTER} className='link hover:text-onyx'>
              Twitter
            </Link>
            . Want to see where I’ve worked? Check out my{' '}
            <Link href={constants.URL.RESUME} className='link'>
              Resume
            </Link>
            , or Connect with me on{' '}
            <Link href={constants.URL.LINKEDIN} className='link'>
              LinkedIn.
            </Link>
          </p>
          <div className='mt-20 space-y-4'>
            <p>Let’s build something great,</p>
            <Signature className='dark:invert w-fit md:w-[300px]' />
          </div>
          <div className='flex md:hidden justify-center w-full mt-16'>
            <GetInTouchBtn />
          </div>
        </div>
        <div className='w-4/5 md:w-[30%] space-y-[100px]'>
          <div className='bg-black border border-dark-border rounded-xl px-11 py-16'>
            <Image src='/assets/images/avatar.png' width={300} height={500} alt='avatar' />
          </div>
          <div className='hidden md:flex justify-center'>
            <GetInTouchBtn />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default AboutPage
