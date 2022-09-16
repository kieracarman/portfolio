import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

import NowPlaying from '@components/NowPlaying'

const Footer = () => {
  return (
    <footer className='p-4'>
      <NowPlaying />
      <div className='text-2xl flex justify-center gap-4 mb-2 text-accent'>
        <a
          href='https://twitter.com/awildkiera'
          className='opacity-80 hover:opacity-100 transition duration-200'
        >
          <FiTwitter />
        </a>
        <a
          href='https://github.com/kieracarman'
          className='opacity-80 hover:opacity-100 transition duration-200'
        >
          <FiGithub />
        </a>
        <a
          href='https://linkedin.com/in/kiera-carman'
          className='opacity-80 hover:opacity-100 transition duration-200'
        >
          <FiLinkedin />
        </a>
      </div>
      <div className='text-center text-accent opacity-50'>
        © {new Date().getFullYear()} Kiera Carman
      </div>
    </footer>
  )
}

export default Footer
