import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Card.module.scss'

type TCardProps = {
  link: string
  id: string
  title: string
  category: string
}

const Card = (props: TCardProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <Link href={props.link}>
          <a>
            <div className={styles.image}>
              <Image
                priority
                src={`/images/${props.id}-screenshot.png`}
                width={1536}
                height={2048}
                alt='project screenshot'
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>{props.title}</div>
              <div className={styles.category}>{props.category}</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card
