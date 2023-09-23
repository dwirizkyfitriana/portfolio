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

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const SunIcon = dynamic(() => import('../icons/SunIcon'), { ssr: false })
  const MoonIcon = dynamic(() => import('../icons/MoonIcon'), { ssr: false })

  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

  useEffect(() => {
    return () => {
      if (theme === 'system') {
        if (systemTheme) setTheme(systemTheme)
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
        else setTheme('light')
      }
    }
  }, [setTheme, systemTheme, theme])

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-item'>
          <NavbarItem href='/'>Home</NavbarItem>
          <NavbarItem href='/'>About</NavbarItem>
          <NavbarItem href='/'>Work</NavbarItem>
          <NavbarItem href='/'>Contact</NavbarItem>
        </div>
        <div className='navbar-item'>
          <NavbarItem href={constants.URL.LINKEDIN} target='_blank'>
            <LinkedInIcon />
          </NavbarItem>
          <NavbarItem href={constants.URL.TWITTER} target='_blank'>
            <TwitterIcon />
          </NavbarItem>
          <NavbarItem href={constants.URL.GITHUB} target='_blank'>
            <GithubIcon />
          </NavbarItem>
          <div className='vertical-divider'></div>
          <div role='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <ThemeIcon />
          </div>
        </div>
      </div>
      <div className='navbar-mobile'>
        <div className='active'>
          <NavbarItem href='/'>
            <HomeIcon />
          </NavbarItem>
        </div>
        <div className=''>
          <NavbarItem href='/'>
            <UserIcon />
          </NavbarItem>
        </div>
        <div className=''>
          <NavbarItem href='/'>
            <BagIcon />
          </NavbarItem>
        </div>
        <div className=''>
          <NavbarItem href='/'>
            <EnvelopeIcon />
          </NavbarItem>
        </div>
      </div>
    </div>
  )
}

export default Navbar
