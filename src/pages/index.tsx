import { type GetStaticProps, type InferGetStaticPropsType } from 'next'

import { allProjects, type Project } from 'contentlayer/generated'
import Layout from '@components/Layout'
import About from '@components/About'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

export const getStaticProps: GetStaticProps<{
  projects: Project[]
}> = () => {
  return {
    props: {
      projects: allProjects
    }
  }
}

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <About />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  )
}

export default Home
