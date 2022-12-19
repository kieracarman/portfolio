import '@styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import localFont from '@next/font/local'

import seo from '../../next-seo.config.mjs'

const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <div className={`${satoshi.variable} font-sans antialiased`}>
      <DefaultSeo {...seo} />
      <Component {...pageProps} key={router.asPath} />
    </div>
  )
}

export default MyApp
