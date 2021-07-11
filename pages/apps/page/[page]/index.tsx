import {
  getLayoutProps,
  getPaginationIdsBySections,
  getSortedPostsData,
  ILayoutProps,
  IPostsData
} from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";
import { Layout } from "../../../../components/layout/layout";

export default function AppsPagination({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={`Программы Ubuntu / ${+postData.currentPage + 1}`}
            canonical={'/apps'}
            topPosts={topPosts}>
      <PostsContainer title={`Программы Ubuntu / ${+postData.currentPage + 1}`}
                      path={'/apps/'} posts={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPaginationIdsBySections(['apps']);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const props = await getSortedPostsData(['apps'], params?.page);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
