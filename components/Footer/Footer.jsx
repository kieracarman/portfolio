import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a href='https://twitter.com/awildkiera' className={styles.icon}>T</a>
        <a href='https://github.com/kieracarman' className={styles.icon}>G</a>
        <a href='https://linkedin.com/in/kiera-carman' className={styles.icon}>L</a>
      </div>
      <div className={styles.copyright}>© 2022 Kiera Carman</div>
    </div>
  )
}

export default Footer