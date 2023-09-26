import Image from 'next/image'
import ArrowRight from '../icons/ArrowRight'
import { Work } from '@/contstants/works'
import Link from 'next/link'

const Card = ({ work }: { work: Work }) => {
  return (
    <div className='card w-full bg-light-bg dark:bg-black-50% dark:border dark:border-dark-border shadow-xl hover:shadow-2xl'>
      <figure>
        <Image
          className='card-img'
          src={work.images[0]}
          alt={work.title}
          width={400}
          height={300}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{work.title}</h2>
        <p>{work.desc.length > 64 ? work.desc.substring(0, 64) + '...' : work.desc}</p>
        <Link
          href={`/works/${work.id}`}
          role='button'
          className='card-actions justify-start items-center mt-4 w-fit group'
        >
          <span>Learn More</span>
          <ArrowRight className='group-hover:animate-arrow' />
        </Link>
      </div>
    </div>
  )
}

export default Card
