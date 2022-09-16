import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import { stagger } from '@lib/animations'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Kiera Carman | Developer</title>
      </Head>

      <div>
        <NavBar />
        <motion.main
          variants={stagger}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
