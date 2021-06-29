import PostsContainer from "../../components/posts/posts-container";
import { getSortedPostsData, IPostsData } from "../../lib/posts";

export default function AppsPage(postData: IPostsData) {
  return (
    <PostsContainer title={'Программы Ubuntu'} path={'/apps/'} postTitle={'Программы Ubuntu'} postData={postData} />
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['apps']);
  return {
    props
  }
}
