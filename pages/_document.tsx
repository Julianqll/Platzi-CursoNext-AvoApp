import { Html, Head, Main, NextScript } from 'next/document'

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    render(){
        return (
            <Html>
              <Head>
                {/* puedes añadir
                favicons
                fonts
                stylesheets
                scripts adicionales */}
              </Head>
              <body className='body-class'>
                <Main />
                <NextScript />
              </body>
            </Html>
          )
    }
}

export default MyDocument