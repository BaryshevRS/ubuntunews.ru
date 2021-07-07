import Head from "next/head";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav/mobile-nav";
import { useState } from "react";
import { ILayoutProps } from "../../lib/posts";

export const Layout: React.FC<ILayoutProps> = (
  {
    children,
    title,
    topPosts,
    canonical
  }
) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const baseUrl = process.env.BASE_URL;

  return (
    <div className='wrapper'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>{title}</title>
        <meta name="keywords" content="ваши, теги"/>
        <meta name="description" content="Описание страницы"/>
        {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`}/>}

        <base href={baseUrl}/>

        <link rel="alternate" href="http://feeds.feedburner.com/Ubuntunewsru" type="application/rss+xml" title="RSS"/>

        <meta property="fb:app_id" content="123456789"/>
        <meta property="og:url" content="https://example.com/page.html"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Заголовок содержимого"/>
        <meta property="og:image" content="https://example.com/image.jpg"/>
        <meta property="og:image:alt" content="Описание того, что находится на изображении (не подпись)"/>
        <meta property="og:description" content="Описание"/>
        <meta property="og:site_name" content="Название сайта"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="article:author" content=""/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@site_account"/>
        <meta name="twitter:creator" content="@individual_account"/>
        <meta name="twitter:url" content="https://example.com/page.html"/>
        <meta name="twitter:title" content="Заголовок контента"/>
        <meta name="twitter:description" content="Описание контента менее 200 символов"/>
        <meta name="twitter:image" content="https://example.com/image.jpg"/>
        <meta name="twitter:image:alt"
              content="Текстовое описание изображения,  с ослабленным зрением. Максимум 420 символов."/>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

        {/*<link rel="logo" href="/template/img/svg/logo.svg" type="image/svg" />*/}

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
