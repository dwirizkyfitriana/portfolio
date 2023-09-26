export type Work = {
  id: string
  images: string[]
  title: string
  subtitle: string
  desc: string
  link: string
  tech: string[]
}

export const works: Work[] = [
  {
    id: '1695748146910',
    images: [
      '/assets/works/sigita-01.png',
      '/assets/works/sigita-02.png',
      '/assets/works/sigita-03.png',
      '/assets/works/sigita-04.png'
    ],
    title: 'SIGITA',
    subtitle: "Kejaksaan Tinggi NTT's Agenda Reminder App",
    desc: 'SIGITA (Sistem Informasi Agenda Digital Adhyaksa) is a reminder application platform designed specifically for prosecutors to help schedule activities, remind about important tasks, and manage work-related events.',
    link: 'https://sigita.info/',
    tech: ['Vue.js', 'Typescript', 'TailwindCSS']
  },
  {
    id: '1695748159135',
    images: [
      '/assets/works/pin-mgmt-01.png',
      '/assets/works/pin-mgmt-02.png',
      '/assets/works/pin-mgmt-03.png',
      '/assets/works/pin-mgmt-04.png'
    ],
    title: 'PIN Management',
    subtitle: "User Management for Kejaksaan Agung's Metting App",
    desc: "The application for managing users for Kejaksaan Agung's meeting app ensures a secure and efficient access control system, allowing administrators to define user privileges and restrict access to specific features based on their roles and responsibilities within the organization.",
    link: 'https://vica-kejagungpin.kejaksaan.go.id/',
    tech: ['PHP', 'CodeIgniter 3', 'JQuery']
  },
  {
    id: '1695748168496',
    images: [
      '/assets/works/putra-mandala-01.png',
      '/assets/works/putra-mandala-02.png',
      '/assets/works/putra-mandala-03.png'
    ],
    title: 'Putra Mandala EMB.',
    subtitle: "Putra Mandala EMB's Admin Dashboard",
    desc: "Admin Dashboard tailored for efficient management of employees and financial operations, including attendance, income, expenses, and salary tracking. Our client's focus is primarily on functionality, with less emphasis on UI intricacies. Our goal is to deliver a user-friendly system that maximizes operational efficiency and informed decision-making within the organization, aligning perfectly with our client's objectives.",
    link: 'https://putramandala.com/',
    tech: ['Vue.js', 'Typescript', 'Nest.js', 'Bootstrap']
  }
]
