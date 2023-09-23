import WorkCard from '@/components/molecules/WorkCard'
import WorkContact from '@/components/molecules/WorkContact'
import PageContainer from '@/components/organism/PageContainer'

const page = () => {
  return (
    <PageContainer title='Works' subtitle='Project and ideas i’ve worked on'>
      <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <WorkContact />
    </PageContainer>
  )
}

export default page
