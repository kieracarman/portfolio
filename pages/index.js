import Head from 'next/head'
import Link from 'next/link'

import { Layout } from '../components'
import utilStyles from '../styles/utils.module.scss'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Kiera Carman</title>
      </Head>
      <h1>Hi, my name is Kiera.</h1>
      <h3>I design and build web applications.</h3>
      <p>
        This is my portfolio site. Feel free to browse my{' '}
        <Link href='/projects'>
          <a>projects</a>
        </Link>, or read more{' '}
        <Link href='/about'>
          <a>about</a>
        </Link> me.
      </p>
    </Layout>
  )
}

export default Home