'use client'

import LinkedInIcon from '../icons/LinkedInIcon'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'
import SunIcon from '../icons/SunIcon'
import HomeIcon from '../icons/HomeIcon'
import UserIcon from '../icons/UserIcon'
import BagIcon from '../icons/BagIcon'
import EnvelopeIcon from '../icons/EnvelopeIcon'
import NavbarItem from '../atoms/NavbarItem'
import { constants } from '@/utils/constants'
import MoonIcon from '../icons/MoonIcon'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  const handleSwitchTheme = (theme: 'dark' | 'light') => {
    localStorage.setItem(constants.KEYS.APP_THEME, theme)
    setIsDark(theme === 'dark' ? true : false)

    if (theme === 'dark') document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }

  useEffect(() => {
    return () => {
      let theme = localStorage.getItem(constants.KEYS.APP_THEME)
      const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (!theme) theme = defaultDark ? 'dark' : 'light'

      handleSwitchTheme(theme as 'dark' | 'light')
    }
  }, [])

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
          <div role='button' onClick={() => handleSwitchTheme(isDark ? 'light' : 'dark')}>
            {isDark ? <SunIcon /> : <MoonIcon />}
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
