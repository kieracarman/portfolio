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
          <a className='opacity-40 transition duration-200 hover:opacity-100'>
            {text}
          </a>
        </Link>
      )}
    </div>
  )
}

const NavBar = () => {
  return (
    <header className='flex items-center justify-between p-4 md:p-6 lg:p-8'>
      <div className='text-xl font-medium uppercase text-accent opacity-40 transition duration-200 hover:opacity-100'>
        <Link href='/'>
          <a>Kiera Carman</a>
        </Link>
      </div>

      {/* desktop nav links */}
      <nav className='hidden text-accent md:flex md:gap-6'>
        <NavItem href='/' text='Home' />
        <NavItem href='/#about' text='About' />
        <NavItem href='/#projects' text='Projects' />
        <NavItem href='/#contact' text='Contact' />
      </nav>
    </header>
  )
}

export default NavBar
