import StarsIcon from '../icons/StarsIcon'
import GetInTouchBtn from '../atoms/GetInTouchBtn'

const WorkContact = () => {
  return (
    <div className='mt-4 md:mt-32 flex flex-col gap-4 items-center rounded-[32px] bg-light-bg dark:bg-black-50% m-auto w-full border border-dashed border-medium-grey dark:border-dark-border py-10 md:p-20'>
      <StarsIcon />
      <h1 className='text-xl md:text-[32px] font-extrabold'>YOUR PROJECT GOES HERE</h1>
      <p className='text-base font-normal text-medium-grey dark:text-dark-grey'>
        Let’s turn your idea into a visual reality
      </p>
      <div className='mt-10 md:mt-20'>
        <GetInTouchBtn />
      </div>
    </div>
  )
}

export default WorkContact
