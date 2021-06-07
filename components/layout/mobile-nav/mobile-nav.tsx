import DownloadIcon from "../../../public/assets/icons/download.svg";
import CloseIcon from "../../../public/assets/icons/close.svg";
import classes from "./mobile-nav.module.scss"

interface IProp {
    children?: React.ReactNode;
}

export const MobileNav: React.FC<IProp> = () => {
    return (
        <div className={classes['mobile-nav']}>
            <ul className={classes['mobile-nav__menu']}>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Статьи</a></li>
                <li><a href="#">Программы</a></li>
                <li><a href="#">Об Ubuntu</a></li>
            </ul>
            <div className={classes['mobile-nav__download']}>
                <DownloadIcon/>
                <a href="#">Скачать Ubuntu</a>
            </div>
            <div className={classes['mobile-nav__close']}><CloseIcon/></div>
        </div>
    )
};
