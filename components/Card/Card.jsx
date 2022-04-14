import Link from 'next/link'
import Image from 'next/image'

import styles from './Card.module.scss'

const Card = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <Link href={props.link}>
          <a>
            <div className={styles.image}>
              Image
            </div>
            <div className={styles.text}>
              <div className={styles.title}>{props.title}</div>
              <div className={styles.category}>{props.category}</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card