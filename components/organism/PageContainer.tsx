const PageContainer = ({
  children,
  title,
  subtitle
}: {
  children: React.ReactNode
  title: string
  subtitle: string
}) => {
  return (
    <main className='main pt-[20vh]'>
      <div className='flex w-full justify-start flex-col gap-8'>
        <div>
          <h1 className='font-bold text-3xl md:text-5xl'>{title}</h1>
          <p className='text-medium-grey'>{subtitle}</p>
        </div>
        {children}
      </div>
    </main>
  )
}

export default PageContainer
