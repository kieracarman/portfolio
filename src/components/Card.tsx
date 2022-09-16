import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Project } from 'contentlayer/generated'
import Browser from './Browser'
import { slideUp } from '@lib/animations'

type CardProps = {
  project: Project
}

const Card = ({ project }: CardProps) => {
  return (
    <motion.article
      variants={slideUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='pb-4'
    >
      <Link href={`/${project.slug}`} scroll={false}>
        <a>
          <Browser>
            <div style={{ fontSize: 0 }}>
              <Image
                src={`/images/${project.slug}-screenshot.png`}
                width={2560}
                height={1600}
                alt='project screenshot'
                priority
              />
            </div>
          </Browser>
          <h3 className='mt-4'>{project.title}</h3>
        </a>
      </Link>
    </motion.article>
  )
}

export default Card
