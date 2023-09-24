'use client'

import NavbarItem from '../atoms/NavbarItem'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import NavbarMobileItem from '../atoms/NavbarMobileItem'
import { navbarCtaItems, navbarItems } from '@/contstants/navigation'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const SunIcon = dynamic(() => import('../icons/SunIcon'), { ssr: false })
  const MoonIcon = dynamic(() => import('../icons/MoonIcon'), { ssr: false })

  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

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
