import { IPostData, getPostData, getAllPostIdsBySection } from '../../lib/posts'
import TimeIcon from "../../public/assets/icons/time.svg";
import { Layout } from "../../components/layout/layout";
import { PostNav } from "../../components/post-nav";
import Time from "../../components/time";
import Source from "../../components/source";
import unified from 'unified'
import parse from 'remark-parse'
const remark2react = require('remark-react');
import NextLink from "../../components/NextLink";

interface IProps {
  postData: IPostData
}

export default function Post({postData}: IProps) {
  return <Layout title={postData.title}>
    <article className={'post'}>
      <header>
        <h1>{postData.title}</h1>

        <div className={'time'}>
          <TimeIcon/>
          <Time dateTime={postData.date} />
        </div>
      </header>

      {
        unified()
          .use(parse)
          .use(remark2react, {
            remarkReactComponents: {
              a: NextLink,
            }
          })
          .processSync(postData.contentHtml).result
      }

      {postData.source && <Source url={postData.source}/>}
    </article>

    <PostNav/>
  </Layout>
}

export async function getStaticPaths() {
  const paths = await getAllPostIdsBySection();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  // Get external data from the file system, API, DB, etc.
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}
