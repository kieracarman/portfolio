import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@components/Layout'
import Buttons from '@components/Buttons'
import projects from '@content/projects.json'

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
      <article className='prose'>
        <h2>{project.title}</h2>
        <h4>{project.subtitle}</h4>
        <Buttons demo={project.demo} code={project.code} />
        <div>
          <Image
            src={`/images/${project.id}-screenshot-desktop.png`}
            alt='Project Screenshot'
            width={2560}
            height={1600}
          />
        </div>
        <div>
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <a>← back to projects</a>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default Project
