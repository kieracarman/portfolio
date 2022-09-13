import { ReactNode } from 'react'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

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
