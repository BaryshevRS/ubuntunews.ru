import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from "../lib/posts";

import LogoIcon from '../public/logo.svg';

import DownloadIcon from '../public/assets/icons/download.svg';
import MenuIcon from '../public/assets/icons/menu.svg';
import TimeIcon from '../public/assets/icons/time.svg';

import FacebookIcon from '../public/assets/icons/facebook.svg';
import GithubIcon from '../public/assets/icons/github.svg';
import TwitterIcon from '../public/assets/icons/twitter.svg';
import VkIcon from '../public/assets/icons/vk.svg';
import YoutubeIcon from '../public/assets/icons/youtube.svg';
import RssIcon from '../public/assets/icons/rss.svg';

export default function Home({allPostsData}: any) {
    console.log('allPostsData', allPostsData);
    return (
        <div className='wrapper'>
            <Head>
                <title>Новости Ubuntu</title>
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
            <header className={'header'}>
                <div className="logo">
                    <a href="#"><LogoIcon/></a>
                </div>
                <nav className={'nav'}>
                    <ul className={'nav__menu desktop'}>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Статьи</a></li>
                        <li><a href="#">Программы</a></li>
                        <li><a href="#">Об Ubuntu</a></li>
                    </ul>
                    <div className={'nav__download desktop'}>
                        <DownloadIcon/>
                        <a href="#">Скачать Ubuntu</a>
                    </div>
                    <div className={'nav__toggle mobile'}><MenuIcon /></div>
                </nav>
            </header>
            <main className={'main'}>

                <h1 className={'title'}>Новости Ubuntu</h1>

                {[1, 2, 3, 4, 5].map((item) => (
                        <article className={'post-preview'} key={item}>
                            <a className={'post-preview__img'} href="#">
                                <img width={260} height={195}
                                 src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                                     alt=""/>
                            </a>
                            <a className={'post-preview__title'} href="#">
                            <h2>Дайджест новостей Ubuntu №8: LTS 12.04.4 и игры под Mir</h2>
                            </a>
                            <p className={'post-preview__content'}>Как Марк Шаттлворт и обещал, были объявлены первые производители смартфонов на базе
                                операционной системы Ubuntu. Ими стали сразу две компании: испанская Bq и китайская
                                Meizu.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at delectus et minus optio quaerat, quas quibusdam repellendus voluptas. Commodi, consectetur deleniti fugiat in molestiae nesciunt odio officia provident quidem repellendus vel, voluptatem, voluptates. Alias commodi dicta dignissimos, hic id optio pariatur quia. Aliquam delectus dignissimos doloremque optio saepe?
                            </p>

                            <footer className={'time'}>
                                <TimeIcon /> <time dateTime="2009-09-04T16:31:24+02:00">21.02.2014</time>
                            </footer>
                        </article>
                    )
                )}

                <div className={'pagination'}>
                    <Link href={`/2`}><a href="#">Туда</a></Link>
                    <Link href={`/2`}><a href="#">Сюда</a></Link>
                </div>
            </main>
            <aside className={'sidebar'}>
                <section className={'best'}>
                    <h4>Популярное</h4>

                    <ul className={'best__list'}>
                        {[1, 2, 3, 4, 5].map((item) => (
                                <li className={'best__item'} key={item}>

                                    <a href={'#'}>
                                        Дайджест новостей Ubuntu №7: GRUB и оценка привлечения крупных производителей</a>

                                    <img width={80} height={60}
                                         src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                                         alt=""/>

                                </li>
                            )
                        )}
                    </ul>
                </section>

                <footer className={'footer'}>

                    <div className={'footer__nav'}>
                        <a href="#">О проекте</a>
                        <a href="#">Сотрудничество</a>
                    </div>

                    <div className={'footer__copyright'}>
                        2008–2021 Новости Ubuntu
                    </div>

                    <ul className={'footer__social'}>
                        <li>
                            <a href="#">
                                <FacebookIcon/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <TwitterIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <VkIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <YoutubeIcon/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <GithubIcon/>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <RssIcon/>
                            </a>
                        </li>
                    </ul>


                </footer>
            </aside>

        </div>
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
