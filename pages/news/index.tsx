import PostsContainer from "../../components/posts/posts-container";
import { getLayoutProps, getSortedPostsData, ILayoutProps, IPostsData } from "../../lib/posts";
import { Layout } from "../../components/layout/layout";

export default function NewsPage({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={'Новости об Убунту'}
            description={'Обзор новых характеристик, анонсы и новости об Убунту'}
            topPosts={topPosts}
            urlSocial={'/news'}
            canonical={'/news'}>
      <PostsContainer title={'Новости об Убунту'} path={'/news/'} posts={postData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['news']);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
