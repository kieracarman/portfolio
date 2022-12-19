import Link from 'next/link'

const NavItem = ({
  className = '',
  href,
  text
}: {
  className?: string
  href: string
  text: string
}) => {
  return (
    <div>
      <Link
        href={href}
        className={`${className} opacity-100 transition duration-200 hover:opacity-75`}
      >
        {text}
      </Link>
    </div>
  )
}

const NavBar = () => {
  return (
    <header className='mx-auto flex max-w-6xl items-baseline justify-between px-4 pb-2 pt-8 md:px-8 md:pt-16 md:pb-8'>
      <Link href='/' className='text-2xl font-black md:text-5xl'>
        Kiera Carman
      </Link>

      <nav className='flex items-baseline gap-8 text-base font-semibold md:text-lg'>
        <NavItem href='/#contact' text='Contact / Resume' />
      </nav>
    </header>
  )
}

export default NavBar
