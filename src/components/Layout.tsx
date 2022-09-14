import { PropsWithChildren } from 'react'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-background text-white'>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
