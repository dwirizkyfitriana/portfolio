'use client'

import { Work } from '@/@types/global'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import WorkCard from './WorkCard'
import WorkCardLoading from './WorkCardLoading'

const WorkShowcase = () => {
  const {
    data: works,
    isLoading,
    error
  } = useQuery({
    queryKey: ['works', 'showcase'],
    queryFn: async () => {
      const response = await axios.get(`${process.env.SERVER_URL}/api/works?showcase=true`)
      const data = response.data.data
      return data as Work[]
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity
  })

  if (isLoading) return <WorkCardLoading />
  if (error) return <p>An Error has occured, try again later</p>

  return <>{works?.map((item, index) => <WorkCard key={index} work={item} />)}</>
}

export default WorkShowcase
