'use client'

import NavbarItem from './NavbarItem'
import { usePathname } from 'next/navigation'

const NavbarMobileItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const pathname = usePathname()

  return (
    <div className={`${href === pathname ? 'active' : ''}`}>
      <NavbarItem href={href}>{children}</NavbarItem>
    </div>
  )
}

export default NavbarMobileItem
