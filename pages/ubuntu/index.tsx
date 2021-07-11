import { Layout } from "../../components/layout/layout";
import PostLink from "../../components/post/post-link";
import React from "react";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";

export default function UbuntuPage({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts}
            urlSocial={'/ubuntu'}
            description={'Общая инфомация об Ubuntu'}
            canonical={'/ubuntu'}
            title={'Об Ubuntu'}>
      <article className={'post'}>
        <header>
          <h1>Об Ubuntu</h1>
        </header>
        <p><strong>Ubuntu</strong> <em>(произносится Убунту)</em> — это активно развивающаяся и поддерживаемая свободным
          сообществом операционная система с открытым исходным кодом, основанная на кодовой базе Debian Linux и
          программном обеспечении проекта GNU.</p>
        <p>Этимология слова Ubuntu своими корнями уходит в южноафриканский язык зулу и примерно переводится как
          «человечность».</p>
        <p>Основным разработчиком и спонсором дистрибутива является компания Canonical, которая была основана <PostLink
          href="http://www.markshuttleworth.com/">Марком Шаттлвортом</PostLink> (Mark Richard Shuttleworth) в марте
          2004, первый же релиз Ubuntu вышел 20-го октября 2004.
          Ubuntu в основном ориентирована для работы на персональных компьютерах.</p>
        <p className="post__btn"><PostLink href="/ubuntu/download">Скачать Ubuntu</PostLink></p>
        <p>Кроме того, существует также серверная редакция, поддерживающая различные облачные решения.</p>

        <h2>Программные компоненты</h2>
        <p>Ubuntu доступны все необходимые приложения, которые могут понадобиться в повседневной жизни:</p>
        <ul>
          <li><strong>Steam</strong> — сервис покупки игр от компании Valve.</li>
          <li><strong>LibreOffice</strong> — офисный пакет (форк OpenOffice.org) для работы с документами, электронными
            таблицами и презентациями.
          </li>
          <li>Браузер Firefox, почтовый клиент, проигрыватели музыки, видео и прочие базовые компоненты.</li>
        </ul>
        <p>В качестве рабочего стола в последних редакциях используется Gnome.</p>
        <h2>Справочные ресурсы</h2>
        <p>Полезные ссылки с информацией на русском языке:</p>
        <ul>
          <li><PostLink href="http://help.ubuntu.ru/">help.ubuntu.ru</PostLink> - документация по работе с системой.</li>
          <li><PostLink href="http://forum.ubuntu.ru/">forum.ubuntu.ru</PostLink> - где можно найти решения возникших проблем.</li>
        </ul>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
