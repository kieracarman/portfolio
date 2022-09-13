import Link from 'next/link'
import { FiCloud, FiCode, FiLock } from 'react-icons/fi'

import styles from '../styles/Buttons.module.scss'

type TButtonsProps = {
  demo: string
  code: string
}

const Buttons = ({ demo, code }: TButtonsProps) => (
  <div className={styles.buttons}>
    {code ? (
      <Link href={code}>
        <a className={styles.btn}>
          <FiCode /> Code
        </a>
      </Link>
    ) : (
      <span className={styles.locked}>
        <FiLock /> Code
      </span>
    )}
    {demo ? (
      <Link href={demo}>
        <a className={styles.btn}>
          <FiCloud /> Demo
        </a>
      </Link>
    ) : (
      <span className={styles.locked}>
        <FiLock /> Demo
      </span>
    )}
  </div>
)

export default Buttons
