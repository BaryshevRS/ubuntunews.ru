import { Layout } from "../../components/layout/layout";
import { getLayoutProps, ILayoutProps } from "../../lib/posts";

export default function UbuntuPage({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts} title={'Форма связи'}>
      <h1 className={'title'}>Форма связи</h1>
      <p>Спасибо. Ваше сообщение принято!</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
