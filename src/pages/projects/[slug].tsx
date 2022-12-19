import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title={project.title}
        description={project.subtitle}
        canonical={`https://www.kieracarman.com/${project.slug}/`}
      />

      <Layout>
        <article className='mb-4'>
          <div className='mx-auto px-4 md:max-w-6xl' style={{ fontSize: 0 }}>
            <Browser>
              <Image
                src={`/images/${project.slug}-screenshot.png`}
                width={2560}
                height={1600}
                alt='project screenshot'
                className='mx-auto'
                priority
              />
            </Browser>
          </div>
          <section className='prose-xl mx-auto max-w-2xl px-4'>
            <h2 className='mt-8 mb-2'>{project.title}</h2>
            <h4 className='mb-4 opacity-80'>{project.subtitle}</h4>
            <Buttons demo={project.demo} code={project.code} />
            <div>
              <MDXContent />
            </div>
          </section>
        </article>
        <div className='flex justify-center'>
          <Link
            href='/'
            className='font-medium no-underline opacity-80 transition duration-150 hover:opacity-100'
          >
            ← back to home
          </Link>
        </div>
      </Layout>
    </>
  )
}

export default Project
