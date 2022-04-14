import { Layout, Card } from '../../components'
import styles from '../../styles/Projects.module.scss'

const projects = [
  {
    id: 'inventory',
    category: 'Web App',
    title: 'Inventory Management System',
    subtitle: 'A simple inventory management web app to keep track of ingredients in a donut shop.',
    description: [
      'I designed and implemented this app to solve a logistics issue that my staff and I were experiencing in my donut shop.',
      'We kept running out of important ingredients when we needed them most and had a hard time remembering when to reorder commonly-used ingredients.',
      'The web application I designed is responsive and 100% mobile compatible. It allows us to take inventory snapshots so we always know what is on the shelves, and automates the process of reordering items when their stock drops below a preset threshold.'
    ]
  },
  {
    id: 'studio-manager',
    category: 'Web App',
    title: 'SRT Studio Management Platform',
    subtitle: 'A web app management platform for a university sound recording technology department.',
    description: [
      'This web app is one of my work-in-progress projects.',
      'I developed this concept while chatting with my dad, who manages sound recording facilities at a university. He expressed a need for a management platform, to assist with his responsibilities including keeping track of physical and non-physical assets, studio bookings, and managing support requests when things break or go missing.',
      'The scope of this project includes multiple RESTful APIs to manage all of the different data involved, as well as integration with the university\'s Active Directory to enable students and faculty to log in with their SSO .edu email address and password.'
    ]
  },
  {
    id: 'studio-manager',
    category: 'Web App',
    title: 'SRT Studio Management Platform',
    subtitle: 'A web app management platform for a university sound recording technology department.',
    description: [
      'This web app is one of my work-in-progress projects.',
      'I developed this concept while chatting with my dad, who manages sound recording facilities at a university. He expressed a need for a management platform, to assist with his responsibilities including keeping track of physical and non-physical assets, studio bookings, and managing support requests when things break or go missing.',
      'The scope of this project includes multiple RESTful APIs to manage all of the different data involved, as well as integration with the university\'s Active Directory to enable students and faculty to log in with their SSO .edu email address and password.'
    ]
  }
]

const Projects = () => {
  return (
    <Layout>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ id, category, title }, index) => (
          <Card
            link={`/projects/${id}`}
            title={title}
            category={category}
            key={index}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects