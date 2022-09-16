import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import { stagger } from '@lib/animations'

const Layout = ({ children }: PropsWithChildren) => {
  return (
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
  )
}

export default Layout
