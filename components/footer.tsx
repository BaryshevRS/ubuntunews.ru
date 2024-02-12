import TwitterIcon from "../public/assets/icons/twitter.svg";
import VkIcon from "../public/assets/icons/vk.svg";
import YoutubeIcon from "../public/assets/icons/youtube.svg";
import GithubIcon from "../public/assets/icons/github.svg";
import RssIcon from "../public/assets/icons/rss.svg";
import PostLink from "./post/post-link";

interface IProp {
    children?: React.ReactNode;
}

export const Footer: React.FC<IProp> = () => {
    const year = new Date().getFullYear();
    return (
      <footer className={'footer'}>
        <div className={'footer__nav'}>
          <PostLink href="/project">О проекте</PostLink>
          <PostLink href="/project/partners">Сотрудничество</PostLink>
        </div>

        <div className={'footer__copyright'}>
          2008–{year} Новости Ubuntu
        </div>

        <ul className={'footer__social'}>
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
            <PostLink href="https://feeds.feedburner.com/ubuntunewsru">
              <RssIcon/>
            </PostLink>
          </li>
        </ul>
      </footer>
    )
};
