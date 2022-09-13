import { ReactNode } from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
