import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

import NowPlaying from '@components/NowPlaying'
import { slideUpDown } from '@lib/animations'

const Footer = () => {
  return (
    <motion.footer
      variants={slideUpDown}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='p-4'
    >
      <NowPlaying />
      <div className='mb-2 flex justify-center gap-4 text-2xl text-accent'>
        <a
          href='https://twitter.com/awildkiera'
          className='opacity-80 transition duration-200 hover:opacity-100'
          aria-label='twitter'
        >
          <FiTwitter />
        </a>
        <a
          href='https://github.com/kieracarman'
          className='opacity-80 transition duration-200 hover:opacity-100'
          aria-label='github'
        >
          <FiGithub />
        </a>
        <a
          href='https://linkedin.com/in/kiera-carman'
          className='opacity-80 transition duration-200 hover:opacity-100'
          aria-label='linkedin'
        >
          <FiLinkedin />
        </a>
      </div>
      <div className='text-center text-accent opacity-50'>
        © {new Date().getFullYear()} Kiera Carman
      </div>
    </motion.footer>
  )
}

export default Footer
