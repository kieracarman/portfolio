import { PropsWithChildren } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  in: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.25,
      ease: 'easeOut'
    }
  },
  offscreen: {
    y: -100,
    transition: {
      duration: 0.5
    }
  }
}

const TransitionDown = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <motion.div variants={variants} animate='in' initial='offscreen'>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default TransitionDown
