import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

const NavbarItem = ({
  children,
  href,
  target
}: {
  children: ReactNode
  href: string
  target?: HTMLAttributeAnchorTarget
}) => {
  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  )
}

export default NavbarItem
