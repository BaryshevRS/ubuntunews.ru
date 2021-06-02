import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from "../lib/posts";

import LogoIcon from '../public/logo.svg';

import DownloadIcon from '../public/assets/icons/download.svg';
// import MenuIcon from '../public/Menu.svg';
// import LogoIcon from '../public/Logo.svg';
// import TimeIcon from '../public/time.svg';

import FacebookIcon from '../public/assets/icons/facebook.svg';
import GithubIcon from '../public/assets/icons/github.svg';
import TwitterIcon from '../public/assets/icons/rss.svg';
import VkIcon from '../public/assets/icons/vk.svg';
import YoutubeIcon from '../public/assets/icons/youtube.svg';
import RssIcon from '../public/assets/icons/rss.svg';

export default function Home({allPostsData}: any) {
    console.log('allPostsData', allPostsData);
    return (
        <section className='container'>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>
                <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="favicon/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-config" content="favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <header>
                <div className="logo">
                    <LogoIcon />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Статьи</a></li>
                        <li><a href="#">Программы</a></li>
                        <li><a href="#">Об Ubuntu</a></li>
                    </ul>

                    <div className={'download-section'}>
                        <DownloadIcon />
                        <a href="#">Скачать Ubuntu</a>
                    </div>

                </nav>
            </header>
            <main>
                {[1, 2, 3, 4, 5].map((item) => (
                        <article key={item}>
                            <figure>
                                <img width={300}
                                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                                     alt=""/>
                            </figure>
                            <header>
                                <h2>Объявлены первые производители смартфонов c Ubuntu</h2>
                            </header>
                            <p>Как Марк Шаттлворт и обещал, были объявлены первые производители смартфонов на базе
                                операционной системы Ubuntu. Ими стали сразу две компании: испанская Bq и китайская
                                Meizu.</p>
                            <footer> <time dateTime="2009-09-04T16:31:24+02:00">21.02.2014</time> </footer>
                        </article>
                    )
                )}

                <div className={'pagination'}>
                    <Link href={`/2`}><a href="#">Туда</a></Link>
                    <Link href={`/2`}><a href="#">Сюда</a></Link>
                </div>

            </main>
            <aside>
                <section className={'best-section'}>
                    <h4>Популярное</h4>

                    <ul>
                        {[1, 2, 3, 4, 5].map((item) => (
                                <li key={item}>

                                    <a href={'#'}>Объявлены первые производители смартфонов c Ubuntu</a>

                                    <img width={50}
                                         src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                                         alt=""/>

                                </li>
                            )
                        )}
                    </ul>
                </section>


            </aside>
            <footer>
                <a href="#">О проекте</a>
                <a href="#">Сотрудничество</a>

                <ul>
                    <li>
                        <a href="#">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <VkIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <YoutubeIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RssIcon />
                        </a>
                    </li>
                </ul>

                2008–2021 Новости Ubuntu
            </footer>
        </section>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
