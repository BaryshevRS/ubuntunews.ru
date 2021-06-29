import { getPaginationIdsBySections, getSortedPostsData, IPostsData } from "../../../../lib/posts";
import PostsContainer from "../../../../components/posts/posts-container";

export default function AppsPagination(postData: IPostsData) {
  return (
    <PostsContainer title={`Программы Ubuntu`} path={'/apps/'} postTitle={'Программы Ubuntu'} postData={postData} />
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
  return {
    props
  }
}
