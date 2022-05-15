import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi'

import { NowPlaying } from '../components'
import styles from '../styles/Layout.module.scss'

const NavItem = ({ href, text }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <div className={styles.navItem}>
      {isActive ? (
        <span className={styles.navItemActive}>{text}</span>
      ) : (
        <Link href={href}>
          <a>{text}</a>
        </Link>
      )}
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <NavItem href='/' text='Home' />
        <NavItem href='/about' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/contact' text='Contact' />
      </nav>
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