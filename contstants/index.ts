import { Experience } from '@/@types/global'

export const constants = {
  URL: {
    LINKEDIN: 'https://www.linkedin.com/in/dwi-fitriana/',
    GITHUB: 'https://github.com/dwirizkyfitriana',
    TWITTER: 'https://twitter.com/dwirizky_',
    RESUME: '/assets/files/cv-dwifitriana.pdf'
  },
  EXPERIENCE: [
    {
      id: +new Date() + Math.random() + '',
      name: 'PT Jumpa Daring Indonesia',
      position: 'Full-stack Developer',
      startYear: '2021',
      endYear: 'Present'
    },
    {
      id: +new Date() + Math.random() + '',
      name: 'PT Global Dinamika Internusa',
      position: 'Front-end Developer',
      startYear: '2020',
      endYear: '2021'
    },
    {
      id: +new Date() + Math.random() + '',
      name: 'PT GITS Indonesia',
      position: 'Front-end Developer (Intern)',
      startYear: '2020',
      endYear: '2020'
    }
  ] satisfies Experience[]
}
