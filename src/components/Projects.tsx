import { type Project } from 'contentlayer/generated'
import Card from '@components/Card'

type ProjectsProps = {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id='projects' className='mb-24 px-4 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='sm:grid sm:grid-cols-2 sm:gap-6'>
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
