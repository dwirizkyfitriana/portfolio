import WorkCardSkeleton from '../atoms/WorkCardSkeleton'

const WorkCardLoading = () => {
  return (
    <>
      <WorkCardSkeleton />
      <WorkCardSkeleton />
      <WorkCardSkeleton />
    </>
  )
}

export default WorkCardLoading
