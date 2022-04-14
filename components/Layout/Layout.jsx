import styles from './Layout.module.scss'
import { Navbar, Footer } from '../'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout