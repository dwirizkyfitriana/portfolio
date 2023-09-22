import Link from 'next/link'
import LinkedInIcon from '../icons/LinkedInIcon'
import TwitterIcon from '../icons/TwitterIcon'
import GithubIcon from '../icons/GithubIcon'
import SunIcon from '../icons/SunIcon'
import HomeIcon from '../icons/HomeIcon'
import UserIcon from '../icons/UserIcon'
import BagIcon from '../icons/BagIcon'
import EnvelopeIcon from '../icons/EnvelopeIcon'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-item'>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Work</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='navbar-item'>
          <LinkedInIcon />
          <TwitterIcon />
          <GithubIcon />
          <div className='vertical-divider'></div>
          <SunIcon />
        </div>
      </div>
      <div className='navbar-mobile'>
        <div className='active'>
          <HomeIcon />
        </div>
        <div className=''>
          <UserIcon />
        </div>
        <div className=''>
          <BagIcon />
        </div>
        <div className=''>
          <EnvelopeIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
