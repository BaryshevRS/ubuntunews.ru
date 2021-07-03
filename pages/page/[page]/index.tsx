import {
  getLayoutProps,
  getPaginationIdsBySections,
  getSortedPostsData, ILayoutProps,
  IPostsData
} from "../../../lib/posts";
import PostsContainer from "../../../components/posts/posts-container";
import { Layout } from "../../../components/layout/layout";

export default function HomePagination({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={'Новости Ubuntu Linux'} topPosts={topPosts}>
      <PostsContainer title={`Новости Ubuntu`}
                      path={'/'}
                      posts={postData} />
    </Layout>

  )
}

export async function getStaticPaths() {
  const paths = await getPaginationIdsBySections(['news', 'apps', 'articles']);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const props = await getSortedPostsData(['news', 'apps', 'articles'], params?.page);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
