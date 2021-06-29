import { getPaginationIdsBySections, getSortedPostsData, IPostsData } from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";


export default function NewsPagination(postData: IPostsData) {
  return (
    <PostsContainer title={`Новости Убунту`} path={'/news/'} postTitle={'Новости Убунту'} postData={postData} />
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
  return {
    props
  }
}
