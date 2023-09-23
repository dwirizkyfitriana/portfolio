import React from 'react'
import ExperienceCard from '../molecules/ExperienceCard'

const Experience = () => {
  return (
    <div className='flex flex-col justify-start w-full mt-28 gap-4'>
      <h1 className='font-bold text-3xl md:text-5xl'>Experience</h1>
      <div className='flex flex-col md:flex-row gap-4'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  )
}

export default Experience
