import Card from '@components/Card'

import projects from '@content/projects.json'

const Projects = () => {
  return (
    <section className='prose-lg p-4 bg-background-light'>
      <h2 className='mt-4 text-blush'>Projects</h2>
      <div>
        {projects.map(({ id, title }, index) => (
          <Card id={id} link={`/${id}`} title={title} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
