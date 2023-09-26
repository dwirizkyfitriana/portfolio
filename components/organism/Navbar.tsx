import NavbarItem from '../atoms/NavbarItem'
import NavbarMobileItem from '../atoms/NavbarMobileItem'
import { navbarCtaItems, navbarItems } from '@/contstants/navigation'
import ThemeToggle from '../atoms/ThemeToggle'

const Navbar = () => {
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
          <ThemeToggle />
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
