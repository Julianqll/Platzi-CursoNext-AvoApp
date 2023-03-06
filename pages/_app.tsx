import Layout from 'components/Layout/Layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    // aqui puedes colocar providers, themes, data
    // layout
    // props adicionales
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}