import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

const NavbarItem = ({
  children,
  href,
  target,
  tooltip
}: {
  children: ReactNode
  href: string
  target?: HTMLAttributeAnchorTarget
  tooltip?: string
}) => {
  return (
    <div className='tooltip' data-tip={tooltip}>
      <Link className='link link-hover' href={href} target={target}>
        {children}
      </Link>
    </div>
  )
}

export default NavbarItem
