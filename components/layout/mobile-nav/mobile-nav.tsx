import DownloadIcon from "../../../public/assets/icons/download.svg";
import CloseIcon from "../../../public/assets/icons/close.svg";
import classes from "./mobile-nav.module.scss"
import PostLink from "../../post/post-link";

interface IProp {
  children?: React.ReactNode;
  onToggle: (toggle: boolean) => void;
}

export const MobileNav: React.FC<IProp> = ({onToggle}) => {
    return (
        <div className={classes['mobile-nav']}>
            <ul className={classes['mobile-nav__menu']}>
                <li><PostLink href={'/news'}>Новости</PostLink></li>
                <li><PostLink href={'/apps'}>Программы</PostLink></li>
                <li><PostLink href={'/articles'}>Статьи</PostLink></li>
                <li><PostLink href={'/ubuntu'}>Об Ubuntu</PostLink></li>
            </ul>
            <div className={classes['mobile-nav__download']}>
                <DownloadIcon/>
                <PostLink href={'/ubuntu/download'}>Скачать Ubuntu</PostLink>
            </div>
            <div className={classes['mobile-nav__close']} onClick={() => onToggle(false)}><CloseIcon/></div>
        </div>
    )
};
