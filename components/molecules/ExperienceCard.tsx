import { Company } from '@/@types/company'

const ExperienceCard = ({ company }: { company: Company }) => {
  return (
    <div className='card w-full md:w-96 bg-light-bg dark:bg-dark-bg shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{company.name}</h2>
        <small>
          {company.startYear} - {company.endYear}
        </small>
        <p>{company.position}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
