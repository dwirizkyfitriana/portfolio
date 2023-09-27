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
  ] satisfies Experience[],
  ABOUT: {
    INTRO: 'I’m Dwi {speaker}, a front-end developer based in Bandung, Indonesia 🇮🇩.',
    SKILLS:
      'With 3+ years of invaluable experience in the field, I have honed my skills in Vue.js, React.js, Next.js, TailwindCSS, and Typescript, allowing me to craft seamless andinteractive user experiences that engage and delight users. My passion for webdevelopment extends beyond the front-end, as I also have a solid understanding ofback-end frameworks such as Express.js and Nest.js, enabling me to create end-to-endsolutions that are both robust and user-friendly. I thrive on staying up-to-date withthe latest industry trends and technologies, and I am always eager to take on newchallenges and collaborate on exciting projects to push the boundaries of what’spossible in web development.',
    EXPERIENCE:
      'During my time at PT Jumpa Daring Indonesia, I had the privilege of collaborating on projects for esteemed clients, including the Office of the Attorney General (Kejaksaan Agung) and the Indonesian National Armed Forces. These experiences were both enriching and eye-opening, allowing me to witness the dedication of legal professionals in upholding justice and gain insights into the nation’s defense landscape. These collaborations not only enhanced my professional skills but also deepened my appreciation for the vital roles these organizations play in our country’s development and stability.'
  }
}
