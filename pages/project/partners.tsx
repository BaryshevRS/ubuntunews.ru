import { Layout } from "../../components/layout/layout";

export default function PartnersPage() {
  const projectCode = `<a title="Новости о Ubuntu Linux" href="https://ubuntunews.ru/" >
<img src="https://ubuntunews.ru/ubuntu.gif"  alt="Новости о Ubuntu Linux"  width="88" height="31" /></a>`;
  return (
    <Layout title={'Сотрудничество'}>
      <h1 className={'title'}>Сотрудничество</h1>

      <p>Ниже представлены дружественные ресурсы.</p>

      <h3>Про Ubuntu</h3>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="http://softhelp.org.ua/" title="">
          <img src="/assets/partners/blog.jpeg" alt="Блог про Убунту Линукс. Просто о важном" width="88"
               height="31"/>
        </a>
      </p>

      <p>
        <a target="_blank" rel="noopener noreferrer" href="http://ubuntu-news.ru/" title="Новости Ubuntu">
          <img src="/assets/partners/un.png" alt="Новости Ubuntu Linux"/></a>
      </p>
      <p>
        <a title="Ubuntu Linux для начинающих" href="http://mirubuntu.ru/">
          <img alt="Ubuntu Linux для начинающих" src="/assets/partners/ubuntu-logo.png" width="88" height="31"
          />
        </a>
      </p>
      <p>
        <a href="http://ubuntovod.ru">ubuntovod.ru - Убунтовод - Всё об Ubuntu Linux</a>
      </p>

      <h2> Про Linux / Open Source </h2>

      <p>
        <a
          href="http://www.opennet.ru">
          <img
            src="/assets/partners/ob31x88_2.gif"
            alt="Проект OpenNET"
            width="88"
            height="31"/>
        </a>
      </p>

      <p>
        <a
          title="Школа Linux. Развитие СПО в школе. Open Source"
          href="http://shkola-linux.ru/">
          <img
            width="80"
            height="15"
            alt="Школа Linux. Развитие СПО в школе. Open Source"
            src="/assets/partners/shkola_linux.png"/>
        </a>
      </p>
      <p>
        <a href="http://linuxnow.ru"
           title="Все о Gnu/Linux">
          <img alt="Все о Gnu/Linux" src="/assets/partners/linuxnow_b_s.png"/>
        </a>
      </p>
      <p>
        <a href="http://vasilisc.com/"
           title="Авторские статьи об Open Source ">Авторские статьи об Open Source</a>
      </p>

      <h3> Кнопка сайта:</h3>

      <p>
        <a title="Новости о Ubuntu Linux" href="http://ubuntunews.ru/">
          <img src="https://ubuntunews.ru/ubuntu.gif" alt="Новости о Ubuntu Linux" width="88" height="31"/></a>
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
