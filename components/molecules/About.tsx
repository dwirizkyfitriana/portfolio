import React from 'react'
import ArrowRight from '../icons/ArrowRight'

const About = () => {
  return (
    <div className='flex flex-col justify-start w-full mt-28 gap-4'>
      <h1 className='font-bold text-3xl md:text-5xl'>Get to know me</h1>
      <div className='flex w-full justify-center'>
        <div className=' bg-light-bg dark:bg-dark-bg rounded-xl py-6 px-8 w-[90%] text-justify shadow-xl'>
          <p>
            I’m Dwi, a front-end engineer based in Bandung, Indonesia 🇮🇩. With 4 years of invaluable
            experience in the field, I have honed my skills in Vue.js, React.js, Next.js,
            TailwindCSS, and Typescript, allowing me to craft seamless and interactive user
            experiences that engage and delight users. My passion for web development extends beyond
            the front-end, as I also have a solid understanding of back-end frameworks such as
            Express.js and Nest.js, enabling me to create end-to-end solutions that are both robust
            and user-friendly. I thrive on staying up-to-date with the latest industry trends and
            technologies, and I am always eager to take on new challenges and collaborate on
            exciting projects to push the boundaries of what’s possible in web development.
          </p>
          <div role='button' className='card-actions justify-start items-center mt-4 w-fit group gap-4'>
            <span>Read More</span>
            <ArrowRight className='group-hover:animate-arrow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
