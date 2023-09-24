import { Experience } from '@/@types/global'

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className='card w-full md:w-96 bg-light-bg dark:bg-dark-bg shadow-xl hover:shadow-2xl'>
      <div className='card-body'>
        <h2 className='card-title'>{experience.name}</h2>
        <small>
          {experience.startYear} - {experience.endYear}
        </small>
        <p>{experience.position}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
