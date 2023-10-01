import WorkContact from '@/components/molecules/WorkContact'
import WorkList from '@/components/molecules/WorkList'
import PageContainer from '@/components/organism/PageContainer'

const WorksPage = () => {
  return (
    <PageContainer title='Works' subtitle='Project and ideas i’ve worked on'>
      <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
        <WorkList />
      </div>
      <WorkContact />
    </PageContainer>
  )
}

export default WorksPage
