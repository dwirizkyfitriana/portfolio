import NavbarItem from './NavbarItem'

const NavbarMobileItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <div>
      <NavbarItem href={href}>{children}</NavbarItem>
    </div>
  )
}

export default NavbarMobileItem
