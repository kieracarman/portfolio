import Head from 'next/head'

import Layout from '@components/Layout'
import Card from '@components/Card'

import projects from '@content/projects.json'

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h2>Projects</h2>
      <div>
        {projects.map(({ id, category, title }, index) => (
          <Card
            id={id}
            link={`/projects/${id}`}
            title={title}
            category={category}
            key={index}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects
