import BagIcon from '@/components/icons/BagIcon'
import EnvelopeIcon from '@/components/icons/EnvelopeIcon'
import HomeIcon from '@/components/icons/HomeIcon'
import StackIcon from '@/components/icons/StackIcon'
import UserIcon from '@/components/icons/UserIcon'
import { constants } from '.'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import GithubIcon from '@/components/icons/GithubIcon'

export const navbarItems = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    label: 'Works',
    href: '/works',
    icon: BagIcon
  },
  {
    label: 'About',
    href: '/about',
    icon: UserIcon
  },
  // {
  //   label: 'Experience',
  //   href: '/#experience',
  //   icon: StackIcon
  // },
  // {
  //   label: 'Contact',
  //   href: '/#contact',
  //   icon: EnvelopeIcon
  // }
]

export const navbarCtaItems = [
  {
    label: 'LinkedIn',
    href: constants.URL.LINKEDIN,
    icon: LinkedInIcon
  },
  {
    label: 'Twitter',
    href: constants.URL.TWITTER,
    icon: TwitterIcon
  },
  {
    label: 'Github',
    href: constants.URL.GITHUB,
    icon: GithubIcon
  }
]
