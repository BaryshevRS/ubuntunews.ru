import {
  getLayoutProps,
  getPaginationIdsBySections,
  getSortedPostsData,
  ILayoutProps,
  IPostsData
} from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";
import { Layout } from "../../../../components/layout/layout";


export default function NewsPagination({topPosts, ...postData}: IPostsData & ILayoutProps) {
  return (
    <Layout title={`Новости об Убунту / ${+postData.currentPage + 1}`}
            canonical={'/news'}
            topPosts={topPosts}>
      <PostsContainer title={`Новости об Убунту / ${+postData.currentPage + 1}`}
                      path={'/news/'}
                      posts={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPaginationIdsBySections(['news']);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const props = await getSortedPostsData(['news'], params?.page);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
