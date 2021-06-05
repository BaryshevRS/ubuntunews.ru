import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
import LogoIcon from "../../public/logo.svg";
import DownloadIcon from "../../public/assets/icons/download.svg";
import MenuIcon from "../../public/assets/icons/menu.svg";
// import TimeIcon from "../../public/assets/icons/time.svg";
import Link from "next/link";
import FacebookIcon from "../../public/assets/icons/facebook.svg";
import TwitterIcon from "../../public/assets/icons/twitter.svg";
import VkIcon from "../../public/assets/icons/vk.svg";
import YoutubeIcon from "../../public/assets/icons/youtube.svg";
import GithubIcon from "../../public/assets/icons/github.svg";
import RssIcon from "../../public/assets/icons/rss.svg";

import ArrowLeftIcon from "../../public/assets/icons/arrow-left.svg";
import ArrowRightIcon from "../../public/assets/icons/arrow-right.svg";
import TimeIcon from "../../public/assets/icons/time.svg";

export default function Post({postData}: any) {

/*    return <div>
        <Head>
            <title>{postData.title}</title>
        </Head>

        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>*/
    return  <div className='wrapper'>
    <Head>
        <title>{postData.title}</title>
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
        <article className={'post'}>
            <header>
                <h1>Новости Ubuntu</h1>

                <div className={'time'}>
                    <TimeIcon /><time dateTime="2009-09-04T16:31:24+02:00"> 21.02.2014</time>
                </div>
            </header>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque odio ratione suscipit voluptatem. A aliquid commodi debitis dolores inventore itaque laudantium libero, minima molestias porro! Ab aliquam, beatae consequatur enim eos itaque molestias possimus repellendus similique sit soluta voluptatum!</p>

            <p>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae corporis distinctio, doloremque ducimus eos iste labore libero necessitatibus officia omnis perferendis, praesentium quas rem veritatis vitae voluptatem. Ad, asperiores, ipsum. Architecto assumenda at beatae blanditiis consectetur, cupiditate dicta dignissimos dolorum esse est facere fugiat ipsam iste laboriosam neque nulla odit officia optio perspiciatis ratione repellat repudiandae saepe sunt tempore totam ut vitae voluptatibus? Deleniti deserunt eaque facere ipsa iste, nam, nesciunt nihil officia possimus similique sunt unde, veritatis voluptas.
            </p>

            <figure>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
            </figure>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>
            <figure>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
                     <figcaption>dolor sit amet <a href="#">adipisicing</a></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>

            <div className={'video'}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wtPI0ueioxk"
                        title="" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>
        </article>

        <ul className={'post-nav'}>
            <li>
                <ArrowLeftIcon />
                <Link href={`/2`}><a href="#">Дайджест новостей Ubuntu №7: GRUB и оценка привлечения крупных производителей</a></Link>
            </li>
            <li>
                <Link href={`/2`}><a href="#">Дайджест новостей Ubuntu №7: GRUB и оценка</a></Link>
                <ArrowRightIcon />
            </li>
        </ul>
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
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: any) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
