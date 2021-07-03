import PostsContainer from "../../components/posts/posts-container";
import { getLayoutProps, getSortedPostsData, ILayoutProps, IPostsData } from "../../lib/posts";
import { Layout } from "../../components/layout/layout";

export default function ArticlesPage({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={'Статьи об Ubuntu Linux'} topPosts={topPosts}>
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
