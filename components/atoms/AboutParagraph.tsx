const AboutParagraph = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div>
      <h1 className='text-base font-semibold uppercase dark:text-grey-47 '>{title}</h1>
      <p className='text-lg text-dark-grey text-justify'>{children}</p>
    </div>
  )
}

export default AboutParagraph
