import {
  getPaginationIdsBySections,
  getSortedPostsData,
  IPostsData
} from "../../../lib/posts";
import PostsContainer from "../../../components/posts/posts-container";

export default function HomePagination(postData: IPostsData) {
  return (
    <PostsContainer title={`Новости Ubuntu Linux`} path={'/'} postTitle={'Новости Ubuntu'} postData={postData} />
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
  return {
    props
  }
}
