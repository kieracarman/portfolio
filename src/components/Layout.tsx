import { PropsWithChildren } from 'react'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
