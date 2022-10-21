import { motion } from 'framer-motion'

import { type Project } from 'contentlayer/generated'
import Card from '@components/Card'
import { slideUp, stagger } from '@lib/animations'

type ProjectsProps = {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <motion.section
      variants={slideUp}
      id='projects'
      className='prose-lg bg-background-light px-4 pt-4 lg:py-12 lg:px-8'
    >
      <motion.div variants={stagger} className='mx-auto max-w-6xl'>
        <motion.h2
          variants={slideUp}
          className='mt-4 mb-4 font-semibold text-white md:text-4xl'
        >
          Projects
        </motion.h2>
        <motion.h3 variants={slideUp} className='mb-8 lg:mb-12'>
          Check out some of my latest projects!
        </motion.h3>
        <motion.div
          variants={stagger}
          className='sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'
        >
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Projects
