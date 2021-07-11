import React from 'react';
import PostContainer from "../../../components/post/post-container";
import { getAllPostIdsBySection, getLayoutProps, getPostData, ILayoutProps, IPostData } from "../../../lib/posts";
import { Layout } from "../../../components/layout/layout";

export default function ArticlePost(
  {topPosts, title, uri, tags = '', description, image, ...postData}: IPostData & ILayoutProps
) {
  return (
    <Layout title={title}
            type={"article"}
            description={description}
            image={image}
            keywords={tags}
            urlSocial={`/${uri}`}
            canonical={`/${uri}`}
            topPosts={topPosts}>
      <PostContainer title={title} uri={uri} {...postData} />
    </Layout>
  )
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
  const props = await getPostData(params.id);
  const layoutProps = await getLayoutProps();
  return {
    props: {...props, ...layoutProps}
  }
}
