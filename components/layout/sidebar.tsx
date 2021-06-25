import FacebookIcon from "../../public/assets/icons/facebook.svg";
import TwitterIcon from "../../public/assets/icons/twitter.svg";
import VkIcon from "../../public/assets/icons/vk.svg";
import YoutubeIcon from "../../public/assets/icons/youtube.svg";
import GithubIcon from "../../public/assets/icons/github.svg";
import RssIcon from "../../public/assets/icons/rss.svg";
import PostLink from "../post/post-link";

interface IProp {
    children?: React.ReactNode;
}

export const Sidebar: React.FC<IProp> = () => {
    return (
        <aside className={'sidebar'}>
            <section className={'best'}>
                <h4>Популярное</h4>

                <ul className={'best__list'}>
                    {[1, 2, 3, 4, 5].map((item) => (
                            <li className={'best__item'} key={item}>

                                <a href={'#'}>
                                    Дайджест новостей Ubuntu №7: GRUB и оценка привлечения крупных
                                    производителей</a>

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
                    <PostLink href="/project">О проекте</PostLink>
                    <PostLink href="/project/partners">Сотрудничество</PostLink>
                </div>

                <div className={'footer__copyright'}>
                    2008–2021 Новости Ubuntu
                </div>

                <ul className={'footer__social'}>
                    <li>
                        <PostLink href="https://www.facebook.com/ubuntunewsrus">
                            <FacebookIcon/>
                        </PostLink>
                    </li>

                    <li>
                        <PostLink href="https://twitter.com/ubuntunewsru/">
                            <TwitterIcon/>
                        </PostLink>
                    </li>
                    <li>
                        <PostLink href="https://vk.com/ubuntunewsru">
                            <VkIcon/>
                        </PostLink>
                    </li>
                    <li>
                        <PostLink href="https://www.youtube.com/user/ubuntunewsru">
                            <YoutubeIcon/>
                        </PostLink>
                    </li>

                    <li>
                        <PostLink href="https://github.com/BaryshevRS/ubuntunews.ru">
                            <GithubIcon/>
                        </PostLink>
                    </li>

                    <li>
                        <PostLink href="http://feeds.feedburner.com/ubuntunewsru">
                            <RssIcon/>
                        </PostLink>
                    </li>
                </ul>


            </footer>
        </aside>
    )
};
