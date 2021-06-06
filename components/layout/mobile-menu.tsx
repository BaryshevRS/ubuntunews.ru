import DownloadIcon from "../../public/assets/icons/download.svg";
import CloseIcon from "../../public/assets/icons/close.svg";

interface IProp {
    children?: React.ReactNode;
}

export const MobileMenu: React.FC<IProp> = () => {
    return (
        <div className={'nav-modal'}>
            <ul className={'nav-modal__menu'}>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Статьи</a></li>
                <li><a href="#">Программы</a></li>
                <li><a href="#">Об Ubuntu</a></li>
            </ul>
            <div className={'nav-modal__download'}>
                <DownloadIcon/>
                <a href="#">Скачать Ubuntu</a>
            </div>
            <div className={'nav-modal__close'}><CloseIcon/></div>
        </div>
    )
};
