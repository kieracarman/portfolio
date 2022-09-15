import Link from 'next/link'

const About = () => {
  return (
    <section className='prose-lg mb-12 px-4'>
      <h2 className='mt-6 mb-4 font-extrabold text-accent'>
        Hi, my name is Kiera!
      </h2>
      <p>
        I&apos;m a software developer from Ithaca, NY. I like writing crafty
        code and breaking down big problems into bite-sized chunks.
      </p>
      <p>
        I think primarily in Typescript, SQL, React, and Next.js but have
        experience with many languages and platforms, and I&apos;m currently
        floating around between lots of different freelance and personal
        projects.
        {/* I am
        also passionate about DevOps, automation, and mixing artistry with code. */}
      </p>
      {/* <p>
        Outside of coding, I love building things with my hands, cooking at
        home, and DJing killer parties when we&lsquo;re not in a pandemic.
      </p> */}
      <div className='mt-8 flex justify-center gap-4'>
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
      </div>
    </section>
  )
}

export default About
