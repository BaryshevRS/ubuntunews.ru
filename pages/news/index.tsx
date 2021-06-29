import PostsContainer from "../../components/posts/posts-container";
import { getSortedPostsData, IPostsData } from "../../lib/posts";

export default function NewsPage(postData: IPostsData) {
  return (
    <PostsContainer title={'Новости Убунту'} path={'/news/'} postTitle={'Новости Убунту'} postData={postData} />
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['news']);
  return {
    props
  }
}
