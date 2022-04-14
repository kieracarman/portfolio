import Link from 'next/link'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.brandText}>
          <Link href='/'>
            <a>Kiera Carman</a>
          </Link>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.item}>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar