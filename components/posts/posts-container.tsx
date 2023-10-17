"use client"

import { IPostData, IPostsData } from "../../lib/posts";
import { useRouter } from "next/router";
import PostsItem from "./posts-item";
import ReactPaginate from "react-paginate";
import { useCallback } from "react";

export interface IProps {
  title: string;
  posts: IPostsData;
  path: string;
}

export default function PostsContainer({title, path, posts: {posts, currentPage, pageCount}}: IProps) {
  const router = useRouter();

  const paginationHandler = useCallback(({selected}: { selected: number }) => {
    router.push(`${path}page/${selected}`);
  }, [router, path]);

  return (
    <>
      <h1 className={'title'}>{title}</h1>

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
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        renderOnZeroPageCount={null}
        onPageChange={paginationHandler}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  )
}
