import { PropsWithChildren } from 'react'
import Head from 'next/head'

import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import TransitionUp from '@components/TransitionUp'
import TransitionDown from '@components/TransitionDown'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Kiera Carman | Developer</title>
      </Head>

      <div>
        <TransitionUp>
          <TransitionDown>
            <NavBar />
          </TransitionDown>
          <main>{children}</main>
          <Footer />
        </TransitionUp>
      </div>
    </>
  )
}

export default Layout
