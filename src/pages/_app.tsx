import '@styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

import seo from '../../next-seo.config.mjs'

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <DefaultSeo {...seo}>
        <Component {...pageProps} key={router.asPath} />
      </DefaultSeo>
    </AnimatePresence>
  )
}

export default MyApp
