// import Head from "next/head";
import LogoIcon from "../../public/logo.svg";
import DownloadIcon from "../../public/assets/icons/download.svg";
import MenuIcon from "../../public/assets/icons/menu.svg";

interface IProp {
    children?: React.ReactNode;
}

export const Header: React.FC<IProp> = () => {
    return (
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
    )
};
