import { getSortedPostsData, IPostData, IPostsData } from "../lib/posts";
// @ts-ignore
import ReactPaginate from 'react-paginate';
import { Layout } from "../components/layout/layout";
import PostsItem from "../components/posts/posts-item";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Home({posts, totalCount, pageCount}: IPostsData) {
  const router = useRouter();

  const paginationHandler = useCallback(({selected}: { selected: string }) => {
    const currentPath = router.pathname;
    console.log('xxxxx', selected)
    router.push(`${currentPath}page/${selected}`);
  }, [router]);

  return (
    <Layout title={'Новости Ubuntu Linux'}>
      <h1 className={'title'}>Новости Ubuntu</h1>

      {posts.map((post: IPostData) => (
          <PostsItem key={post.id} {...post} />
        )
      )}

      <div className={'pagination'}>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          initialPage={0}
          breakClassName={'break-me'}
          totalCount={totalCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          disableInitialCallback={true}
          onPageChange={paginationHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getSortedPostsData(['news', 'apps', 'articles']);
  console.error('props', props);
  return {
    props
  }
}
