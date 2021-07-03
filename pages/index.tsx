import { getLayoutProps, getSortedPostsData, ILayoutProps, IPostsData } from "../lib/posts";
import PostsContainer from "../components/posts/posts-container";
import { Layout } from "../components/layout/layout";

export default function Home({topPosts, ...postData}: IPostsData & ILayoutProps){
  return (
    <Layout title={'Новости Ubuntu Linux'} topPosts={topPosts}>
      <PostsContainer path={'/'} title={'Новости Ubuntu'} posts={postData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['news', 'apps', 'articles']);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
