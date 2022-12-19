import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

import NowPlaying from '@components/NowPlaying'

const Footer = () => {
  return (
    <footer className='p-4'>
      <NowPlaying />
      <div className='mb-2 flex justify-center gap-4 text-2xl'>
        <a
          href='https://twitter.com/awildkiera'
          className='opacity-60 transition duration-200 hover:opacity-100'
          aria-label='twitter'
        >
          <FiTwitter />
        </a>
        <a
          href='https://github.com/kieracarman'
          className='opacity-60 transition duration-200 hover:opacity-100'
          aria-label='github'
        >
          <FiGithub />
        </a>
        <a
          href='https://linkedin.com/in/kiera-carman'
          className='opacity-60 transition duration-200 hover:opacity-100'
          aria-label='linkedin'
        >
          <FiLinkedin />
        </a>
      </div>
      <div className='text-center font-medium lowercase tracking-wide opacity-75'>
        © {new Date().getFullYear()} Kiera Carman - Built with Next.js, MDX, and
        Framer Motion ❤️
      </div>
    </footer>
  )
}

export default Footer
