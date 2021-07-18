import Head from "next/head";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav/mobile-nav";
import React, { useState } from "react";
import { ILayoutProps } from "../../lib/posts";

export const Layout: React.FC<ILayoutProps> = (
  {
    children,
    title,
    description,
    keywords,
    topPosts,
    urlSocial,
    canonical,
    image,
    type = 'website'
  }
) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const baseUrl = process.env.BASE_URL;

  return (
    <div className={`wrapper`}>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>{title}</title>
        {keywords && <meta name="keywords" content={keywords}/>}
        {description && <meta name="description" content={description}/>}

        <base href={baseUrl}/>
        {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`}/>}

        <link rel="alternate" href="http://feeds.feedburner.com/Ubuntunewsru" type="application/rss+xml" title="RSS"/>

        {urlSocial && <>
          <meta property="fb:app_id" content="127388540662110"/>
          <meta property="og:url" content={`${baseUrl}${urlSocial}`}/>
          <meta property="og:type" content={type}/>
          <meta property="og:title" content={title}/>
          {image && <meta property="og:image" content={`${baseUrl}/${image}`}/>}
          {description && <meta property="og:description" content={description}/>}
          <meta property="og:site_name" content="Новости Ubuntu Linux"/>
          <meta property="og:locale" content="ru_RU"/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@ubuntunewsru"/>
          <meta name="twitter:creator" content="@ubuntunewsru"/>
          <meta name="twitter:url" content={`${baseUrl}${urlSocial}`}/>
          <meta name="twitter:title" content={title}/>
          {description && <meta name="twitter:description" content={description}/>}
          {image && <meta name="twitter:image" content={`${baseUrl}/${image}`}/>}
        </>
        }

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta name="google-site-verification" content="LPQrJDo4SaQ8Guxp4iBR7l1djWL2_ibYQaW9h7Pox64"/>
        <meta name='yandex-verification' content='7f39a8aa154db7c2'/>
      </Head>

      <Header onToggleMenu={setShowMobileNav}/>
      <main className={'main'}>
        {children}
      </main>

      <Sidebar topPosts={topPosts}/>

      {showMobileNav && <MobileNav onToggle={setShowMobileNav}/>}
    </div>
  )
};
