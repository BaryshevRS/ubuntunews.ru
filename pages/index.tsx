import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { getSortedPostsData } from "../lib/posts";

export default function Home({allPostsData}: any) {
    console.log('allPostsData', allPostsData);
    return (
        <article className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
                <link rel="manifest" href="favicon/site.webmanifest"/>
                <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="favicon/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-config" content="favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, distinctio? Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. A ab aperiam at atque deserunt eius et eum facere facilis illum
                    iusto modi neque numquam obcaecati porro quia, unde! Temporibus, voluptatum.</p>

                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eaque hic id iure iusto libero minus
                    nemo nihil ut voluptates.</p>

                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ullam?</p>

                <section>
                    <ul>
                        <li>This is a list.</li>
                        <li>It appears completely unstyled.</li>
                        <li>Structurally, it's still a list.</li>
                        <li>However, this style only applies to immediate child elements.</li>
                        <li>Nested lists:
                            <ul>
                                <li>are unaffected by this style</li>
                                <li>will still show a bullet</li>
                                <li>and have appropriate left margin</li>
                            </ul>
                        </li>
                        <li>This may still come in handy in some situations.</li>
                    </ul>

                    <pre>
                        <code>sudo apt-add-repository ppa:gwibber-daily/ppa<br/>
                            sudo apt-get update<br/>
                            sudo apt-get install gwibber
                        </code>
                    </pre>

                    <p>Lorem <a href="https://nextjs.org">Next.js!</a> ipsum dolor sit
                        amet, <code>pages/index.js</code> consectetur adipisicing elit.
                        Aliquid, distinctio? Aliquid, distinctio? <code>pages/index.js</code></p>
                    <p>Lorem ipsum dolor <kbd>A</kbd> sit amet, consectetur <kbd>A</kbd> <kbd>Ctrl</kbd> adipisicing
                        elit. Aliquid, distinctio?</p>

                    <p><samp>Ваш
                        браузер поддерживает JavaScript 1.3</samp></p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti deserunt doloribus,
                        ea eaque eius eos eum eveniet fugiat illum itaque laboriosam laudantium libero magni modi
                        mollitia obcaecati pariatur porro quo rerum suscipit tenetur unde veniam veritatis. Est,
                        excepturi?</p>

                    <blockquote>
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deleniti deserunt
                            doloribus, ea eaque eius eos eum eveniet fugiat illum itaque laboriosam laudantium libero
                            magni modi mollitia obcaecati pariatur porro quo rerum suscipit tenetur unde veniam
                            veritatis. Est, excepturi?</p>
                    </blockquote>

                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam.</h6>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, distinctio?</p>


                    <div>
                        <hr/>
                        <Link href={`/about`}><a>About</a></Link>
                        <hr/>
                    </div>
                </section>

                <table>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </main>

            <figure>
                <img src="/zorin-small.png" alt="Vercel Logo"/>
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, distinctio?
                </figcaption>
            </figure>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ea exercitationem maxime, nobis nostrum
                odit! Aperiam at exercitationem suscipit voluptatibus!</p>

            <figure>
                <div className={'img'}>
                    <div></div>
                    <img src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
                         alt="Vercel Logo"/>
                </div>
                <figcaption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, distinctio?
                </figcaption>
            </figure>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorem eaque magni minus mollitia
                nesciunt, quod repellendus sunt vel voluptates! Adipisci eaque error iure maxime neque odit repudiandae
                similique voluptatem.</p>

            <div className={'video'}>
                <iframe width={680} src="http://www.youtube.com/embed/FocPwTmQZ18" frameBorder="0"
                        allowFullScreen/>
            </div>


            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores aspernatur assumenda
                deleniti dignissimos dolorem dolorum ducimus est eum excepturi harum id illo illum laboriosam molestiae
                natus nulla numquam officia, quia quis quos reprehenderit ut vel veniam voluptatem! A adipisci aliquam
                nisi nulla quibusdam. Consequatur dolore explicabo in magni odit.</p>


            {/*            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>*/}
        </article>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
