import {
  getLayoutProps,
  getPaginationIdsBySections,
  getSortedPostsData,
  ILayoutProps,
  IPostsData
} from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";
import { Layout } from "../../../../components/layout/layout";

export default function ArticlesPagination({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={`Статьи об Ubuntu Linux ${+postData.currentPage + 1}`}
            canonical={'/articles'}
            topPosts={topPosts}>
      <PostsContainer title={`Статьи об Ubuntu Linux ${+postData.currentPage + 1}`}
                      path={'/articles/'}  posts={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPaginationIdsBySections(['articles']);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const props = await getSortedPostsData(['articles'], params?.page);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
