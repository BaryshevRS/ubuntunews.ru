import PostsContainer from "../../components/posts/posts-container";
import { getLayoutProps, getSortedPostsData, ILayoutProps, IPostsData } from "../../lib/posts";
import { Layout } from "../../components/layout/layout";

export default function ArticlesPage({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={'Статьи об Ubuntu Linux'}
            description={'Статьи и инструкции по настройке компонентов Ubuntu'}
            topPosts={topPosts}
            urlSocial={'/articles'}
            canonical={'/articles'}>
      <PostsContainer title={'Статьи об Ubuntu Linux'} path={'/articles/'} posts={postData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['articles']);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
