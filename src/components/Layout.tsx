import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

import NowPlaying from './NowPlaying'

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <div>
      {isActive ? (
        <span>{text}</span>
      ) : (
        <Link href={href}>
          <a>{text}</a>
        </Link>
      )}
    </div>
  )
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav className='flex items-center justify-between text-red-700'>
        <NavItem href='/' text='Home' />
        <NavItem href='/about' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/contact' text='Contact' />
      </nav>
      <main>
        <section>{children}</section>
      </main>
      <footer>
        <NowPlaying />
        <div>
          <a href='https://twitter.com/awildkiera'>
            <FiTwitter />
          </a>
          <a href='https://github.com/kieracarman'>
            <FiGithub />
          </a>
          <a href='https://linkedin.com/in/kiera-carman'>
            <FiLinkedin />
          </a>
        </div>
        <div>© {new Date().getFullYear()} Kiera Carman</div>
      </footer>
    </div>
  )
}

export default Layout
