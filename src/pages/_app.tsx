import '@styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import TransitionUp from '@components/TransitionUp'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <TransitionUp>
      <Component {...pageProps} />
    </TransitionUp>
  )
}

export default MyApp
