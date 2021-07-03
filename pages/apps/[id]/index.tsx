import React from 'react';
import PostContainer from "../../../components/post/post-container";
import { getAllPostIdsBySection, getLayoutProps, getPostData, ILayoutProps, IPostData } from "../../../lib/posts";
import { Layout } from "../../../components/layout/layout";

export default function AppsPost({topPosts, title, ...postData}: IPostData & ILayoutProps) {
  return (
    <Layout title={title} topPosts={topPosts}>
      <PostContainer title={title} {...postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIdsBySection('apps');
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  // Get external data from the file system, API, DB, etc.
  const props = await getPostData(params.id);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
