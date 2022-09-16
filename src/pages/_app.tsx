import '@styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  )
}

export default MyApp
