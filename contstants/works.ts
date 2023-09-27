export type Work = {
  id: string
  images: string[]
  title: string
  subtitle: string
  desc: string
  link: string
  tech: string[]
  status: 'Work in Progress' | 'Launched'
}

export const works: Work[] = [
  {
    id: '1695790068372',
    images: [
      '/assets/works/petra-01.png',
      '/assets/works/petra-02.png',
      '/assets/works/petra-03.png',
      '/assets/works/petra-04.png'
    ],
    title: 'PETRa',
    subtitle: 'Pesan Eletronik Terpadu Rahasia dan Aman',
    desc: 'PETRa is an application that allows you to communicate securely by sending or receiving messages between users based on text, voice and video messages. PETRa can help you carry out tasks digitally, create official letters between users, hold online meetings or meetings in the form of webinars. PETRa can also monitor user locations in real time which is visualized on a map. Encrypted data security ensures confidentiality of all activities using PETRa.',
    link: 'https://petera.id',
    tech: ['Vue.js', 'Typescript', 'TailwindCSS'],
    status: 'Work in Progress'
  },
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
    tech: ['Vue.js', 'Typescript', 'TailwindCSS'],
    status: 'Launched'
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
    tech: ['PHP', 'CodeIgniter 3', 'JQuery'],
    status: 'Launched'
  },
  {
    id: '1695791283827',
    images: [
      '/assets/works/mt-55-01.png',
      '/assets/works/mt-55-02.png',
      '/assets/works/mt-55-03.png',
      '/assets/works/mt-55-04.png'
    ],
    title: 'MT-55',
    subtitle: "Hubdam 55's Video Conference Platform",
    desc: 'A vital tool for overseeing army training through video conferences. It enables real-time communication and coordination among geographically dispersed military units and trainers, ensuring a unified command structure and the secure exchange of classified information. With its multimedia capabilities, it streamlines training sessions, enhances feedback, and ultimately boosts military readiness.',
    link: 'https://mt55.jumpa.id/',
    tech: ['WebRTC', 'JQuery'],
    status: 'Launched'
  },
  {
    id: '1695748168496',
    images: [
      '/assets/works/putra-mandala-01.png',
      '/assets/works/putra-mandala-02.png',
      '/assets/works/putra-mandala-03.png',
      '/assets/works/putra-mandala-04.png'
    ],
    title: 'Putra Mandala EMB.',
    subtitle: "Putra Mandala EMB's Admin Dashboard",
    desc: "Admin Dashboard tailored for efficient management of employees and financial operations, including attendance, income, expenses, and salary tracking. Our client's focus is primarily on functionality, with less emphasis on UI intricacies. Our goal is to deliver a user-friendly system that maximizes operational efficiency and informed decision-making within the organization, aligning perfectly with our client's objectives.",
    link: 'https://putramandala.com/',
    tech: ['Vue.js', 'Typescript', 'Nest.js', 'Bootstrap'],
    status: 'Launched'
  },
  {
    id: '1695793025131',
    images: [
      '/assets/works/e-kasbon-01.png',
      '/assets/works/e-kasbon-02.png',
      '/assets/works/e-kasbon-03.png',
      '/assets/works/e-kasbon-03.png'
    ],
    title: 'E-Kasbon',
    subtitle: 'Wise Solution Before Payday.',
    desc: 'An innovative application that facilitates employee financial management by offering a user-friendly platform for requesting loans and conveniently repaying them through automatic deductions from their salaries. This sophisticated tool not only streamlines the borrowing process but also promotes financial responsibility among employees, enabling them to access financial support when needed while ensuring timely repayments without administrative hassles. With our application, employers can provide a valuable benefit to their workforce, fostering a more financially secure and satisfied team.',
    link: 'https://www.e-kasbon.com/',
    tech: ['Vue.js', 'Parse Platform', 'cordova', 'Framework 7'],
    status: 'Launched'
  }
]
