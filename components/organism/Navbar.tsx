'use client'

import LinkedInIcon from '../icons/LinkedInIcon'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'
import HomeIcon from '../icons/HomeIcon'
import UserIcon from '../icons/UserIcon'
import BagIcon from '../icons/BagIcon'
import EnvelopeIcon from '../icons/EnvelopeIcon'
import NavbarItem from '../atoms/NavbarItem'
import { constants } from '@/utils/constants'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import StackIcon from '../icons/StackIcon'
import NavbarMobileItem from '../atoms/NavbarMobileItem'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const SunIcon = dynamic(() => import('../icons/SunIcon'), { ssr: false })
  const MoonIcon = dynamic(() => import('../icons/MoonIcon'), { ssr: false })

  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

  const navbarItems = [
    {
      label: 'Home',
      href: '/',
      icon: HomeIcon
    },
    {
      label: 'Work',
      href: '#work',
      icon: BagIcon
    },
    {
      label: 'About',
      href: '#about',
      icon: UserIcon
    },
    {
      label: 'Experience',
      href: '#experience',
      icon: StackIcon
    },
    {
      label: 'Contact',
      href: '#contact',
      icon: EnvelopeIcon
    }
  ]

  const navbarCtaItems = [
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

  useEffect(() => {
    if (theme === 'system') {
      if (systemTheme) setTheme(systemTheme)
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
      else setTheme('light')
    }
  }, [setTheme, systemTheme, theme])

  return (
    <div className='navbar-container'>
      <p className='md:hidden text-white font-semibold text-3xl absolute mt-5 opacity-40'>[dw]</p>
      <div className='navbar'>
        <div className='navbar-item'>
          <p className='font-bold text-lg'>[dw]</p>
          {navbarItems.map((item, index) => (
            <NavbarItem key={index} href={item.href}>
              {item.label}
            </NavbarItem>
          ))}
        </div>
        <div className='navbar-item'>
          {navbarCtaItems.map((item, index) => (
            <NavbarItem key={index} href={item.href} target='_blank' tooltip={item.label}>
              <item.icon />
            </NavbarItem>
          ))}
          <div className='vertical-divider'></div>
          <div role='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <ThemeIcon />
          </div>
        </div>
      </div>
      <div className='navbar-mobile'>
        {navbarItems.map((item, index) => (
          <NavbarMobileItem key={index} href={item.href}>
            <item.icon />
          </NavbarMobileItem>
        ))}
      </div>
    </div>
  )
}

export default Navbar
