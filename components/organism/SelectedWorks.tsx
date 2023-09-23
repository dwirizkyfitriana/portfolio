import ArrowRight from '../icons/ArrowRight'
import Card from '../molecules/SelectedWorkCard'

const SelectedWorks = () => {
  return (
    <div id='work' className='selected-work'>
      <h1 className='font-bold text-3xl md:text-5xl'>Selected Works</h1>

      <div className='selected-work-item'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className='flex w-full justify-center items-center gap-4'>
        <p role='button'>Discover More</p>
        <ArrowRight role='button' className='animate-arrow' />
      </div>
    </div>
  )
}

export default SelectedWorks
