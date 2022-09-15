import { type Project } from 'contentlayer/generated'
import Card from '@components/Card'

type ProjectsProps = {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section
      id='projects'
      className='prose-lg bg-background-light px-4 pt-4 lg:py-12 lg:px-8'
    >
      <div className='mx-auto max-w-6xl'>
        <h2 className='mt-4 mb-4 font-semibold text-white md:text-4xl'>
          Projects
        </h2>
        <h3 className='mb-8 lg:mb-12'>
          Check out some of the projects I&apos;ve built!
        </h3>
        <div className='sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
