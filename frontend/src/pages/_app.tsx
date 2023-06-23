import { AppPropsWithLayout } from '@customTypes/layouts'
import '@assets/styles/globals.css'
import React from 'react'
import { useRouter } from 'next/router'


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const router = useRouter()

  React.useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('959755395067934') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}