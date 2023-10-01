export type Experience = {
  id: string
  name: string
  startYear: string
  endYear: string
  position: string
}

export type Work = {
  _id: string
  images: string[]
  title: string
  subtitle: string
  desc: string
  link: string
  tech: string[]
  status: 'Launched' | 'Work in Progress'
}
