import Link from 'next/link'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi'

import { NowPlaying } from '../components'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <div className={styles.navItem}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </div>
      </header>
      <main className={styles.view}>
        <section className={styles.content}>{children}</section>
      </main>
      <footer className={styles.footer}>
        <NowPlaying />
        <div className={styles.footerIcons}>
          <a href='https://twitter.com/awildkiera' className={styles.footerIcon}><FiTwitter /></a>
          <a href='https://github.com/kieracarman' className={styles.footerIcon}><FiGithub /></a>
          <a href='https://linkedin.com/in/kiera-carman' className={styles.footerIcon}><FiLinkedin /></a>
        </div>
        <div className={styles.copyright}>© 2022 Kiera Carman</div>
      </footer>
    </div>
  )
}

export default Layout