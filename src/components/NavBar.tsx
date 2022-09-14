import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <div>
      {isActive ? (
        <span>{text}</span>
      ) : (
        <Link href={href}>
          <a className='transition duration-200 opacity-40 hover:opacity-100'>
            {text}
          </a>
        </Link>
      )}
    </div>
  )
}

const NavBar = () => {
  return (
    <header className='p-4 flex items-center justify-between'>
      <div className='uppercase font-medium text-xl text-accent transition duration-200 opacity-40 hover:opacity-100'>
        <Link href='/'>
          <a>Kiera Carman</a>
        </Link>
      </div>

      {/* desktop nav links */}
      <nav className='hidden md:flex text-accent'>
        <NavItem href='/' text='Home' />
        <NavItem href='/about/' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/contact' text='Contact' />
      </nav>
    </header>
  )
}

export default NavBar
