import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

import NowPlaying from '@components/NowPlaying'

const Footer = () => {
  return (
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
  )
}

export default Footer
