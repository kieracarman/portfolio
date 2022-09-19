import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

import { allProjects, type Project } from 'contentlayer/generated'
import Layout from '@components/Layout'
import Buttons from '@components/Buttons'
import Browser from '@components/Browser'
import { slideUp, slideUpDown, stagger } from '@lib/animations'

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
        <motion.article
          variants={stagger}
          className='mb-4 text-white 2xl:mt-8 2xl:grid 2xl:grid-cols-2 2xl:items-center 2xl:gap-8'
        >
          <motion.div
            variants={slideUp}
            className='mx-auto px-4 md:max-w-3xl 2xl:mr-0'
            style={{ fontSize: 0 }}
          >
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
          </motion.div>
          <motion.section className='prose-xl mx-auto max-w-2xl px-4 2xl:ml-0'>
            <motion.h2 variants={slideUp} className='mt-4 mb-2 text-white'>
              {project.title}
            </motion.h2>
            <motion.h4
              variants={slideUp}
              className='mb-4 text-white opacity-80'
            >
              {project.subtitle}
            </motion.h4>
            <Buttons demo={project.demo} code={project.code} />
            <motion.div variants={slideUp}>
              <MDXContent />
            </motion.div>
          </motion.section>
        </motion.article>
        <motion.div variants={slideUpDown} className='flex justify-center'>
          <Link href='/' scroll={false}>
            <a className='text-accent no-underline opacity-80 transition duration-150 hover:opacity-100'>
              ← back to home
            </a>
          </Link>
        </motion.div>
      </Layout>
    </>
  )
}

export default Project
