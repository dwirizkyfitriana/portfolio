import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='top'>
            <h1 className='font-extrabold text-4xl'>[dw]</h1>
            <p className='mt-2 dark:text-white-25%'>Thanks for stopping by ッ</p>
          </div>
          <div className='bottom'>
            <p className='dark:text-white-25%'>
              &copy; Dwi Fitriana {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className='footer-right'>
          <nav>
            <h1 className='footer-title'>Links</h1>
            <Link href='/' className='link link-hover'>
              Home
            </Link>
            <Link href='/' className='link link-hover'>
              About
            </Link>
            <Link href='/' className='link link-hover'>
              Work
            </Link>
            <Link href='/' className='link link-hover'>
              Contact
            </Link>
          </nav>
          <nav>
            <h1 className='footer-title'>Elsewhere</h1>
            <Link href='/' className='link link-hover'>
              Email
            </Link>
            <Link href='/' className='link link-hover'>
              LinkedIn
            </Link>
            <Link href='/' className='link link-hover'>
              Github
            </Link>
            <Link href='/' className='link link-hover'>
              Twitter
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
