import ExperienceCard from '../molecules/ExperienceCard'
import { constants } from '@/contstants'

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col justify-start w-full mt-28 gap-4 md:gap-8'>
      <h1 className='font-bold text-3xl md:text-5xl'>Experience</h1>
      <div className='flex flex-col md:flex-row flex-wrap gap-4'>
        {constants.EXPERIENCE.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  )
}

export default Experience
