import LogoIcon from "../../public/logo.svg";
import DownloadIcon from "../../public/assets/icons/download.svg";
import MenuIcon from "../../public/assets/icons/menu.svg";
import Link from "next/link";
import React from "react";
import PostLink from "../post/post-link";

interface IProp {
  children?: React.ReactNode;
  onToggleMenu: (toggle: boolean) => void;
}

export const Header: React.FC<IProp> = ({onToggleMenu}) => {
  return (
    <header className={'header'}>
      <div className="logo">
        <Link href={'/'}> <LogoIcon/> </Link>
      </div>
      <nav className={'nav'}>
        <ul className={'nav__menu desktop'}>
          <li><PostLink activeMatch href="/news">Новости</PostLink></li>
          <li><PostLink activeMatch href="/apps">Программы</PostLink></li>
          <li><PostLink activeMatch href="/articles">Статьи</PostLink></li>
          <li><PostLink activeMatch href="/ubuntu">Об Ubuntu</PostLink></li>
        </ul>
        <div className={'nav__download desktop'}>
          <DownloadIcon/>
          <PostLink href="/ubuntu/download">Скачать Ubuntu</PostLink>
        </div>
        <div className={'nav__toggle mobile'} onClick={() => onToggleMenu(true)}><MenuIcon/></div>
      </nav>
    </header>
  )
};
