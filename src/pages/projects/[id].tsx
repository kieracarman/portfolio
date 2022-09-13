import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@components/Layout'
import Buttons from '@components/Buttons'
import projects from '@content/projects.json'
import styles from '../../styles/Project.module.scss'
import utilStyles from '../../styles/utils.module.scss'

export async function getStaticPaths() {
  const paths = projects.map(({ id }) => {
    return {
      params: {
        id
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(({ id }) => id === params.id)
  return {
    props: {
      project
    }
  }
}

const Project = ({ project }) => {
  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className={utilStyles.title}>
        <h2>{project.title}</h2>
        <h4>{project.subtitle}</h4>
        <Buttons demo={project.demo} code={project.code} />
      </div>
      <div className={styles.hero}>
        <Image
          priority
          src={`/images/${project.id}-screenshot-desktop.png`}
          alt='Project Screenshot'
          width={2560}
          height={1600}
          className={styles.image}
        />
      </div>
      <div className={styles.description}>
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.backButton}>
        <Link href='/projects'>
          <a>← back to projects</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Project
