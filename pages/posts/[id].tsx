import { getAllPostIds, getPostData } from '../../lib/posts'
// import Date from '../../components/date'
import TimeIcon from "../../public/assets/icons/time.svg";
import { Layout } from "../../components/layout/layout";
import { PostNav } from "../../components/post-nav";

export default function Post({postData}: any) {

    /*    return <div>
            <Head>
                <title>{postData.title}</title>
            </Head>

            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>*/
    return <Layout title={postData.title}>
        <article className={'post'}>
            <header>
                <h1>Новости Ubuntu</h1>

                <div className={'time'}>
                    <TimeIcon/>
                    <time dateTime="2009-09-04T16:31:24+02:00"> 21.02.2014</time>
                </div>
            </header>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque odio ratione suscipit voluptatem.
                A aliquid commodi debitis dolores inventore itaque laudantium libero, minima molestias porro! Ab
                aliquam, beatae consequatur enim eos itaque molestias possimus repellendus similique sit soluta
                voluptatum!</p>

            <p>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae corporis distinctio, doloremque
                ducimus eos iste labore libero necessitatibus officia omnis perferendis, praesentium quas rem veritatis
                vitae voluptatem. Ad, asperiores, ipsum. Architecto assumenda at beatae blanditiis consectetur,
                cupiditate dicta dignissimos dolorum esse est facere fugiat ipsam iste laboriosam neque nulla odit
                officia optio perspiciatis ratione repellat repudiandae saepe sunt tempore totam ut vitae voluptatibus?
                Deleniti deserunt eaque facere ipsa iste, nam, nesciunt nihil officia possimus similique sunt unde,
                veritatis voluptas.
            </p>

            <figure>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
            </figure>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum
                totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est
                molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda
                cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia
                optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>
            <figure>
                <img width={660} height={495}
                     src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                     alt=""/>
                <figcaption>dolor sit amet <a href="#">adipisicing</a></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum
                totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est
                molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda
                cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia
                optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>

            <div className={'video'}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wtPI0ueioxk"
                        title="" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eos iste iure quasi quibusdam rerum
                totam unde vel. Atque impedit iusto laboriosam maxime minima quaerat repudiandae. Aliquam dolorem est
                molestias neque? A, aspernatur dicta excepturi provident quod reiciendis tempore. Adipisci, assumenda
                cumque cupiditate dolores earum eligendi error impedit laboriosam laudantium minus molestiae, mollitia
                optio quam quibusdam quisquam sed, veritatis. Earum?
            </p>
        </article>

        <PostNav />
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: any) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
