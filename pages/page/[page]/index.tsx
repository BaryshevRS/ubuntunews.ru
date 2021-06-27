// @ts-ignore
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
/*https://nextjs.org/docs/api-reference/next/router
  https://vpilip.com/how-build-simple-pagination-in-nextjs/*/

export default function Home({posts, totalCount, pageCount}: IPostsData) {
  console.error('totalCount', totalCount);

  const router = useRouter();
  console.error('router', router);

  // const paginationHandler = (page) => {
  //   const currentPath = props.router.pathname;
  //   const currentQuery = props.router.query;
  //   currentQuery.page = page.selected + 1;
  //
  //   props.router.push({
  //     pathname: currentPath,
  //     query: currentQuery,
  //   });
  //
  // };

  return (
    <Layout title={'Новости Ubuntu Linux | Страница'}>
      <h1 className={'title'}>Новости Ubuntu | Страница</h1>

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
          breakClassName={'break-me'}
          totalCount={totalCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({selected}: {selected: string}) => {
            console.log('xxxxx', selected)
             router.push(`/page/${selected}`);
          }}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
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

export async function getStaticProps({ params }: any) {
  const props = await getSortedPostsData(['news', 'apps', 'articles'], params?.page);
  console.error({params});
  return {
    props
  }
}
