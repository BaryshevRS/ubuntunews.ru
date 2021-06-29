import { getSortedPostsData, IPostsData } from "../lib/posts";
import PostsContainer from "../components/posts/posts-container";

export default function Home(postData: IPostsData) {
  return (
    <PostsContainer title={'Новости Ubuntu Linux'} path={'/'} postTitle={'Новости Ubuntu'} postData={postData} />
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['news', 'apps', 'articles']);
  return {
    props
  }
}
