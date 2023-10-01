'use client'

import { Work } from '@/@types/global'
import DetailSkeleton from '@/components/atoms/DetailSkeleton'
import ArrowRight from '@/components/icons/ArrowRight'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const DetailWork = () => {
  const params = useParams()

  const {
    data: work,
    isLoading,
    error
  } = useQuery({
    queryKey: ['works', { id: params.id }],
    queryFn: async () => {
      const response = await axios.get(`${process.env.SERVER_URL}/api/works/${params.id}`)
      const data = response.data.data
      return data as Work
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity
  })

  if (error) return <p>An Error has occured, try again later</p>
  if (isLoading) return <DetailSkeleton />

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
                  priority
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
            <p className='badge p-3 bg-light-bg dark:bg-dark-bg text-onyx dark:text-white dark:border-dark-border'>
              {work?.status}
            </p>
          </div>

          <div className='space-x-2'>
            {work?.tech.map((item, index) => (
              <div
                key={index}
                className='badge p-4 bg-light-bg dark:bg-dark-bg text-onyx dark:text-white dark:border-dark-border'
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
