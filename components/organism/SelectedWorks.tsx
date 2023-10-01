import Link from 'next/link'
import ArrowRight from '../icons/ArrowRight'
import WorkShowcase from '../molecules/WorkShowcase'

const SelectedWorks = () => {
  return (
    <div id='work' className='selected-work'>
      <h1 className='font-bold text-3xl md:text-5xl'>Selected Works</h1>

      <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 w-full'>
        <WorkShowcase />
      </div>

      <Link href='/works' className='flex w-full justify-center items-center gap-4'>
        <p role='button'>Discover More</p>
        <ArrowRight role='button' className='animate-arrow' />
      </Link>
    </div>
  )
}

export default SelectedWorks
