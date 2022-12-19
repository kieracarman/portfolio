import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Project } from 'contentlayer/generated'
import Browser from './Browser'

type CardProps = {
  project: Project
}

const Card = ({ project }: CardProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='mb-6'
    >
      <Link href={`/projects/${project.slug}`}>
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
        <h3 className='m-0 py-3 px-2 text-xl font-bold'>{project.title}</h3>
      </Link>
    </motion.article>
  )
}

export default Card
