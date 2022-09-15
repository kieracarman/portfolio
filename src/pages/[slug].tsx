import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { allProjects, type Project } from 'contentlayer/generated'
import Layout from '@components/Layout'
import Buttons from '@components/Buttons'
import Browser from '@components/Browser'

export const getStaticPaths = () => {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  project: Project
}> = ({ params }) => {
  const project = allProjects.find((project) => project.slug === params?.slug)

  if (!project) {
    return { notFound: true }
  }

  return { props: { project } }
}

const Project = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(project.body.code)

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Layout>
        <article className='mb-4 text-white'>
          <div className='mx-auto md:max-w-3xl' style={{ fontSize: 0 }}>
            <Browser>
              <Image
                src={`/images/${project.slug}-screenshot.png`}
                width={2560}
                height={1600}
                alt='project screenshot'
                className='mx-auto'
              />
            </Browser>
          </div>
          <section className='prose-lg mx-auto max-w-2xl px-4'>
            <h2 className='mt-4 mb-2 text-white'>{project.title}</h2>
            <h4 className='mb-4 text-white opacity-80'>{project.subtitle}</h4>
            <Buttons demo={project.demo} code={project.code} />
            <MDXContent />
            <div className='flex justify-center'>
              <Link href='/'>
                <a className='text-accent no-underline opacity-80 transition duration-200 hover:opacity-100'>
                  ← back to home
                </a>
              </Link>
            </div>
          </section>
        </article>
      </Layout>
    </>
  )
}

export default Project
