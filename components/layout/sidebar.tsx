import FacebookIcon from "../../public/assets/icons/facebook.svg";
import TwitterIcon from "../../public/assets/icons/twitter.svg";
import VkIcon from "../../public/assets/icons/vk.svg";
import YoutubeIcon from "../../public/assets/icons/youtube.svg";
import GithubIcon from "../../public/assets/icons/github.svg";
import RssIcon from "../../public/assets/icons/rss.svg";

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
    )
};
