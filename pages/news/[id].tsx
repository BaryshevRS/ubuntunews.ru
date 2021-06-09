import { IPostData, getPostData, getAllPostIdsBySection } from '../../lib/posts'
import TimeIcon from "../../public/assets/icons/time.svg";
import { Layout } from "../../components/layout/layout";
import { PostNav } from "../../components/post-nav";
import Time from "../../components/time";
import Source from "../../components/source";

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

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      {postData.source && <Source url={postData.source}/>}
    </article>

    <PostNav/>
  </Layout>
}

// Проверяет есть ли контент по запросу из адресной строки
export async function getStaticPaths() {
  const paths = await getAllPostIdsBySection();
  console.log('paths', paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  // Get external data from the file system, API, DB, etc.
  const postData = await getPostData(params.id);

  // The value of the `props` key will be passed to the component
  return {
    props: {
      postData
    }
  }
}
