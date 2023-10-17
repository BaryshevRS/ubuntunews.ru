import { Layout } from "../../components/layout/layout";
import PostLink from "../../components/post/post-link";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";

export default function UbuntuPage({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts} title={'О проекте'}>
      <h1 className={'title'}>О проекте</h1>

      <p><PostLink href="https://ubuntunews.ru/">ubuntunews.ru</PostLink> — некоммерческий русскоязычный интернет-ресурс,
        посвященный публикации новостей о дистрибутивах, программном обеспечении и событиям из жизни сообщества Ubuntu GNU/Linux.</p>
      <p>Целью ресурса является освещение наиболее заметных событий вокруг операционной системы <PostLink href="/ubuntu">Ubuntu GNU/Linux</PostLink> и связанных с ней проектов. Мы также стараемся обеспечить возможность обмена различной Ubuntu-ориентированной информацией, последними новостями, ссылками, документацией и другими ресурсами.</p>
  {/*    <h2>Контакты для связи</h2>

      <p>По всем вопросам и пожеланиям можно воспользоваться <PostLink href={'/project/form'}>формой для связи.</PostLink></p>*/}

      <h2>Участие в проекте</h2>
      <p>Все кому не безразлична судьба проекта можете помочь, внеся свой посильный вклад:</p>
      <ul>
        <li>Порекомендовать сайт друзьям.</li>
        <li>Просто комментировать статьи.</li>
        <li>Прислать тематическую статью.</li>
        <li>Поделиться ссылкой в блоге или в социальной сети.</li>
      </ul>

      <h2>Лицензия</h2>

      <p>Статьи, размещённые на сайте, распространяются под лицензией <strong>CC-BY-SA</strong>
         (Creative Commons Attribution-ShareAlike), что означает: вы можете модифицировать и
        распространять материалы сайта, но с обязательным указанием гиперссылки на наш сайт <PostLink href="https://ubuntunews.ru/">ubuntunews.ru</PostLink> в качестве источника
        и делиться производными работами на тех же условиях.</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
