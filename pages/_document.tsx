import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ga, ym } from '../lib/consts/mertics';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-17349676-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: (ym),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: (ga),
            }}
          />
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301389543928531"
                  crossOrigin="anonymous" />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
