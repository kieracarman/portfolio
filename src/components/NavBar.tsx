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
          <a>{text}</a>
        </Link>
      )}
    </div>
  )
}

const NavBar = () => {
  return (
    <header className='flex justify-between'>
      <h3 className='uppercase'>Kiera Carman</h3>
      <nav className='flex gap-4'>
        <NavItem href='/' text='Home' />
      </nav>
    </header>
  )
}

export default NavBar
