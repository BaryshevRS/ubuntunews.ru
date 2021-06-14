import { IPostData, getPostData, getAllPostIdsBySection } from '../../lib/posts'
import React from 'react';
import PostContainer from "../../components/post/post-container";

export default function NewsPost(props: IPostData) {
  return <PostContainer {...props} />
}

export async function getStaticPaths() {
  const paths = await getAllPostIdsBySection('articles');
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  // Get external data from the file system, API, DB, etc.
  const postData = await getPostData(params.id);
  return {
    props: postData
  }
}
