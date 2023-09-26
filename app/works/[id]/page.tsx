'use client'

import ArrowRight from '@/components/icons/ArrowRight'
import { Work, works } from '@/contstants/works'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const DetailWork = () => {
  const [work, setWork] = useState<Work | null>(null)
  const params = useParams()

  useEffect(() => {
    setWork(works.filter((item) => item.id === params.id)[0])
  }, [params.id])

  return (
    <div className='main pt-[20vh]'>
      <div className='grid grid-cols-[1fr_1.5fr] gap-8 max-md:grid-cols-1 mb-20'>
        <div className='w-full md:w-[480px]'>
          <div className='carousel w-full'>
            {work?.images.map((url, index) => (
              <div key={index} id={`${index}`} className='carousel-item w-full'>
                <Image
                  className='w-full rounded-2xl'
                  src={url}
                  alt='thumbnail'
                  width={480}
                  height={270}
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-1 w-full'>
            {work?.images.map((url, index) => (
              <Link key={index} href={`#${index}`}>
                <Image
                  className='object-cover rounded-lg h-full'
                  src={url}
                  alt='thumbnail'
                  width={120}
                  height={80}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className='space-y-8'>
          <div className='space-y-1'>
            <h1 className='font-bold text-3xl md:text-4xl'>{work?.title}</h1>
            <h3 className='text-medium-grey'>{work?.subtitle}</h3>
          </div>

          <div className='space-x-2'>
            {work?.tech.map((item, index) => (
              <div
                key={index}
                className='badge p-4 bg-light-bg dark:bg-dark-bg text-onyx dark:text-white'
              >
                {item}
              </div>
            ))}
          </div>

          <p className='text-justify'>{work?.desc}</p>

          {work?.link && (
            <Link href={work?.link} target='_blank' className='btn bg-dark-bg text-white group'>
              Visit Site <ArrowRight className='group-hover:animate-arrow [&>*]:!stroke-white' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailWork
