import PostsContainer from "../../components/posts/posts-container";
import { getLayoutProps, getSortedPostsData, ILayoutProps, IPostsData } from "../../lib/posts";
import { Layout } from "../../components/layout/layout";

export default function AppsPage({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={'Программы Ubuntu'} topPosts={topPosts}>
      <PostsContainer title={'Программы Ubuntu'} path={'/apps/'} posts={postData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['apps']);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
