import Layout from '@components/Layout'
import About from '@components/About'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

const Home = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
