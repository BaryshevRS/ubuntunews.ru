import PostsContainer from "../../components/posts/posts-container";
import { getSortedPostsData, IPostsData } from "../../lib/posts";

export default function ArticlesPage(postData: IPostsData) {
  return (
    <PostsContainer title={'Статьи об Ubuntu Linux'} path={'/articles/'}
                    postTitle={'Статьи об Ubuntu Linux'} postData={postData} />
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['articles']);
  return {
    props
  }
}
