import React from "react";
import { Layout } from "../../components/layout/layout";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";
import PostLink from "../../components/post/post-link";

export default function PartnersPage({topPosts}: ILayoutProps) {
  const projectCode = `<a title="Новости о Ubuntu Linux" href="https://ubuntunews.ru/" >
<img src="https://ubuntunews.ru/ubuntu.gif"  alt="Новости о Ubuntu Linux"  width="88" height="31" /></a>`;

  return (
    <Layout topPosts={topPosts} title={'Сотрудничество'}>
      <h1 className={'title'}>Сотрудничество</h1>

      <p>Ниже представлены дружественные ресурсы.</p>

      <h3>Про Ubuntu</h3>

      <p>
        <PostLink href="http://softhelp.org.ua/" title="">
          <img src="/assets/partners/blog.jpeg" alt="Блог про Убунту Линукс. Просто о важном" width="88"
               height="31"/>
        </PostLink>
      </p>

      <p>
        <PostLink href="http://ubuntu-news.ru/" title="Новости Ubuntu">
          <img src="/assets/partners/un.png" alt="Новости Ubuntu Linux"/></PostLink>
      </p>
      <p>
        <PostLink title="Ubuntu Linux для начинающих" href="http://mirubuntu.ru/">
          <img alt="Ubuntu Linux для начинающих" src="/assets/partners/ubuntu-logo.png" width="88" height="31"
          />
        </PostLink>
      </p>
      <p>
        <PostLink href="http://ubuntovod.ru">ubuntovod.ru - Убунтовод - Всё об Ubuntu Linux</PostLink>
      </p>

      <h2> Про Linux / Open Source </h2>

      <p>
        <PostLink href="http://www.opennet.ru">
          <img
            src="/assets/partners/ob31x88_2.gif"
            alt="Проект OpenNET"
            width="88"
            height="31"/>
        </PostLink>
      </p>

      <p>
        <PostLink
          title="Школа Linux. Развитие СПО в школе. Open Source"
          href="http://shkola-linux.ru/">
          <img
            width="80"
            height="15"
            alt="Школа Linux. Развитие СПО в школе. Open Source"
            src="/assets/partners/shkola_linux.png"/>
        </PostLink>
      </p>
      <p>
        <PostLink href="http://linuxnow.ru"
           title="Все о Gnu/Linux">
          <img alt="Все о Gnu/Linux" src="/assets/partners/linuxnow_b_s.png"/>
        </PostLink>
      </p>
      <p>
        <PostLink href="http://vasilisc.com/"
           title="Авторские статьи об Open Source ">Авторские статьи об Open Source</PostLink>
      </p>

      <h3> Кнопка сайта:</h3>

      <p>
        <PostLink title="Новости о Ubuntu Linux" href="http://ubuntunews.ru/">
          <img src="https://ubuntunews.ru/ubuntu.gif" alt="Новости о Ubuntu Linux" width="88" height="31"/>
        </PostLink>
      </p>

      <textarea
        defaultValue={projectCode}
        style={{width: '100%', height: '100px'}}
        aria-describedby=""
        autoCapitalize="none"
        autoComplete="off"/>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}

