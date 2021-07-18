import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import React from "react";

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
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-17349676-1', {
              page_path: window.location.pathname,
            });`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(2978071, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });`,
            }}
          />
          <noscript><div><img src="https://mc.yandex.ru/watch/2978071"
                              style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
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
