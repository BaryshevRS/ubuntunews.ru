import { Layout } from "../components/layout/layout";
import { getLayoutProps, ILayoutProps } from "../lib/posts";

export default function Custom404({topPosts}: ILayoutProps) {
  return (
    <Layout topPosts={topPosts} title={'Страница не найдена'}>
      <h1 className={'title'}>Страница не найдена</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const layoutProps = await getLayoutProps();
  return {
    props: {...layoutProps}
  }
}
