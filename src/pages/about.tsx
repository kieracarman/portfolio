import Head from 'next/head'

import Layout from '@components/Layout'

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h2>About</h2>
      <div>
        <p>
          Kiera Carman is a creative thinker from Ithaca, NY. She likes writing
          crafty code and breaking down big problems into bite-sized chunks.
        </p>
        <p>
          She thinks primarily in Javascript, Express, MongoDB, React, and
          Next.js but has experience with many languages and platforms.
          Currently, she floats around between lots of different freelance and
          personal projects. She is also passionate about DevOps, automation,
          and mixing artistry with code.
        </p>
        <p>
          Outside of coding, Kiera builds things with her hands, enjoys cooking
          at home, and DJing killer parties when we&lsquo;re not in a pandemic.
        </p>
      </div>
    </Layout>
  )
}

export default About
