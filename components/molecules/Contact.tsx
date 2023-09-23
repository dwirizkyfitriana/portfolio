import Link from 'next/link'
import SendIcon from '../icons/SendIcon'
import { constants } from '@/utils/constants'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center mt-[114px] gap-4 w-full mb-[114px]'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <h1 className='font-bold text-3xl md:text-5xl'>Let’s work together</h1>
        <p className=' text-dark-grey w-full md:w-2/3 dark:text-medium-grey text-center md:text-start'>
          Want to discuss an opportunity to create something great? I’m ready when you are.
        </p>
      </div>
      <div className='flex w-full md:w-fit'>
        <Link
          className='flex items-center gap-2 button bg-gradient-dark text-white drop-shadow-lg w-full justify-center'
          href={constants.URL.LINKEDIN}
          target='_blank'
        >
          <SendIcon />
          Get in touch
        </Link>
      </div>
    </div>
  )
}

export default Contact
