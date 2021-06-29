import { getPaginationIdsBySections, getSortedPostsData, IPostsData } from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";

export default function ArticlesPagination(postData: IPostsData) {
  return (
    <PostsContainer title={`Статьи об Ubuntu Linux`} path={'/articles/'}
                    postTitle={'Статьи об Ubuntu Linux'} postData={postData} />
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
  return {
    props
  }
}
