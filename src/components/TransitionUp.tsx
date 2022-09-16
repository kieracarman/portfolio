import { PropsWithChildren } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.125
    }
  }
}

const TransitionUp = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={variants} animate='in' initial='out' exit='out'>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default TransitionUp
