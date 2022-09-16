import { PropsWithChildren } from 'react'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import TransitionUp from '@components/TransitionUp'
import TransitionDown from '@components/TransitionDown'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TransitionUp>
        <TransitionDown>
          <NavBar />
        </TransitionDown>
        <main>{children}</main>
        <Footer />
      </TransitionUp>
    </div>
  )
}

export default Layout
