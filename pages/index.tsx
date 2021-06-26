import Link from 'next/link'
import { getSortedPostsData } from "../lib/posts";

import { Layout } from "../components/layout/layout";
import PostsItem from "../components/posts/posts-item";

export default function Home({allPostsData}: any) {
    console.log('allPostsData', allPostsData);

    return (
        <Layout title={'Новости Ubuntu Linux'}>
            <h1 className={'title'}>Новости Ubuntu</h1>

            {[1, 2, 3, 4, 5].map((item) => (
                  <PostsItem key={item} item={item} />
                )
            )}

            <div className={'pagination'}>
                <Link href={`/2`}><a href="#">Туда</a></Link>
                <Link href={`/2`}><a href="#">Сюда</a></Link>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {

      const allPostsData = getSortedPostsData();
    // const allPostsData = getPostIdsBySection();

    return {
        props: {
            allPostsData
        }
    }
}
