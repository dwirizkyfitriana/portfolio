import Image from 'next/image'
import ArrowRight from '../icons/ArrowRight'

const Card = () => {
  return (
    <div className='card w-full bg-light-bg dark:bg-black-50% dark:border dark:border-dark-border shadow-xl hover:shadow-2xl'>
      <figure>
        <Image
          className='card-img'
          src='/assets/images/shoes.webp'
          alt='Shoes'
          width={400}
          height={300}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div role='button' className='card-actions justify-start items-center mt-4 w-fit group'>
          <span>Learn More</span>
          <ArrowRight className='group-hover:animate-arrow' />
        </div>
      </div>
    </div>
  )
}

export default Card
