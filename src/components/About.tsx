import Link from 'next/link'
import { motion } from 'framer-motion'

import { slideUp, stagger } from '@lib/animations'

const About = () => {
  return (
    <motion.section
      variants={stagger}
      id='about'
      className='prose-xl mb-12 px-4 sm:mx-auto sm:max-w-2xl md:py-12 lg:mb-8'
    >
      <motion.h2
        variants={slideUp}
        className='mt-6 mb-4 font-extrabold text-accent sm:text-4xl md:text-6xl'
      >
        Hi, my name is Kiera!
      </motion.h2>
      <motion.p variants={slideUp}>
        I&apos;m a software developer from Ithaca, NY. I like writing crafty
        code and breaking down big problems into bite-sized chunks.
      </motion.p>
      <motion.p variants={slideUp}>
        I think primarily in Typescript, React.js, Next.js, and SQL but have
        experience with many languages and platforms, and I&apos;m currently
        looking for a full-time developer position!
        {/* floating around between lots of different freelance and personal
        projects. */}
        {/* I am
        also passionate about DevOps, automation, and mixing artistry with code. */}
      </motion.p>
      {/* <p>
        Outside of coding, I love building things with my hands, cooking at
        home, and DJing killer parties when we&lsquo;re not in a pandemic.
      </p> */}
      <motion.div
        variants={slideUp}
        className='mt-8 flex justify-center gap-4 sm:justify-start'
      >
        <Link href='https://github.com/kieracarman'>
          <a className='block rounded-lg border border-cta bg-cta px-8 py-2 text-center font-bold text-background transition duration-200  hover:border-white hover:text-white focus:outline-none'>
            Github
          </a>
        </Link>
        <Link href='https://linkedin.com/in/kiera-carman'>
          <a className='block rounded-lg border border-cta px-8 py-2 text-center text-cta transition duration-200 hover:border-white hover:text-white focus:outline-none'>
            Linkedin
          </a>
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default About
