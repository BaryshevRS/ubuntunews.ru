import { IPostData, IPostsData } from "../../lib/posts";
import { useRouter } from "next/router";
import PostsItem from "./posts-item";
import ReactPaginate from "react-paginate";
import { useCallback } from "react";
import { Layout } from "../layout/layout";

export interface IProps {
  title: string;
  postTitle: string;
  postData: IPostsData;
  path: string;
}

export default function PostsContainer({postTitle, title, path, postData: {posts, currentPage, pageCount}}: IProps) {
  const router = useRouter();

  const paginationHandler = useCallback(({selected}: { selected: number }) => {
    router.push(`${path}page/${selected}`);
  }, [router]);

  return (
    <Layout title={title}>
      <h1 className={'title'}>{postTitle}</h1>

      {posts.map((post: IPostData) => (
          <PostsItem key={post.id} {...post} />
        )
      )}

      <ReactPaginate
        disableInitialCallback={true}
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
