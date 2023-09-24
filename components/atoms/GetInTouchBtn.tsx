import { constants } from '@/contstants'
import Link from 'next/link'
import React from 'react'
import SendIcon from '../icons/SendIcon'

const GetInTouchBtn = () => {
  return (
    <Link
      className='flex items-center gap-2 button bg-gradient-dark text-white drop-shadow-lg w-full md:w-fit justify-center'
      href={constants.URL.LINKEDIN}
      target='_blank'
    >
      <SendIcon />
      Get in touch
    </Link>
  )
}

export default GetInTouchBtn
