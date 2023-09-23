import GetInTouchBtn from '../atoms/GetInTouchBtn'

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col md:flex-row justify-between items-center mt-[114px] gap-4 md:gap-8 w-full'
    >
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <h1 className='font-bold text-3xl md:text-5xl'>Let’s work together</h1>
        <p className=' text-dark-grey w-full md:w-2/3 dark:text-medium-grey text-center md:text-start'>
          Want to discuss an opportunity to create something great? I’m ready when you are.
        </p>
      </div>
      <div className='flex w-full md:w-fit'>
        <GetInTouchBtn />
      </div>
    </div>
  )
}

export default Contact
