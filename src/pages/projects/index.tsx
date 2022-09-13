import Head from 'next/head'

import { Layout, Card } from '../../components'
import styles from '../../styles/Projects.module.scss'
import utilStyles from '../../styles/utils.module.scss'

import projects from '@content/projects.json'

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h2 className={utilStyles.title}>Projects</h2>
      <div className={styles.grid}>
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
