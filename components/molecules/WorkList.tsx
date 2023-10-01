'use client'

import WorkCard from '@/components/molecules/WorkCard'
import { useEffect, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Work } from '@/@types/global'
import { useIntersection } from '@mantine/hooks'
import WorkCardLoading from './WorkCardLoading'

const WorkList = () => {
  const [count, setCount] = useState(0)

  const { data, fetchNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery(
    ['works'],
    async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `${process.env.SERVER_URL}/api/works?page=${pageParam}&limit=6`
      )
      const data = response.data.data
      setCount(data.total)

      return data.data as Work[]
    },
    {
      getNextPageParam: (_, pages) => pages.length + 1,
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )

  const lastCardRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastCardRef.current,
    threshold: 1
  })

  useEffect(() => {
    if (entry?.isIntersecting && count > 6) fetchNextPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, entry])

  const works = data?.pages.flatMap((work) => work)

  if (isFetching && !isFetchingNextPage) return <WorkCardLoading />

  return (
    <>
      {works?.map((item, index) => (
        <div key={index} ref={index === works.length - 1 ? ref : undefined}>
          <WorkCard work={item} />
        </div>
      ))}
      {isFetchingNextPage && <WorkCardLoading />}
    </>
  )
}

export default WorkList
