import ReactPaginate from 'react-paginate';
import { useRouter } from "next/router";
import {
  getPaginationIdsBySections,
  getSortedPostsData,
  IPostData,
  IPostsData
} from "../../../lib/posts";
import { Layout } from "../../../components/layout/layout";
import PostsItem from "../../../components/posts/posts-item";
import { useCallback } from "react";

export default function Home({posts, pageCount, currentPage}: IPostsData) {
  console.error('currentPage', currentPage);

  const router = useRouter();
  console.error('router', router);

  const paginationHandler = useCallback(({selected}: { selected: number }) => {
    router.push(`/page/${selected}`);
  }, [router]);

  return (
    <Layout title={'Новости Ubuntu Linux | Страница'}>
      <h1 className={'title'}>Новости Ubuntu | Страница</h1>

      {posts.map((post: IPostData) => (
          <PostsItem key={post.id} {...post} />
        )
      )}

      <ReactPaginate
        initialPage={+currentPage}
        previousLabel={'Назад'}
        nextLabel={'Вперёд'}
        breakLabel={'...'}
        pageCount={pageCount}
        breakClassName={'break-me'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={paginationHandler}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />

    </Layout>
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
  console.error('params', params);
  return {
    props
  }
}
