import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { getSortedPostsData } from "../lib/posts";

export default function Home({allPostsData}: any) {
  // console.log('allPostsData', allPostsData);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>

        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
              <link rel="manifest" href="icons/site.webmanifest" />
                <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
                  <link rel="shortcut icon" href="icons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                      <meta name="msapplication-config" content="icons/browserconfig.xml" />
                        <meta name="theme-color" content="#ffffff" />


      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <section>
          <div>
            <hr/>
            <Link href={`/about`}><a>About</a></Link>
            <hr/>
          </div>
          <ul>
          {allPostsData.map(({ id, date, title }: any) => (
              <li key={id}>
                <Link href={`/posts/${id}`}><a>{title}</a></Link>
                <br />
                {id}
                <br />
                {date}
              </li>
          ))}
          </ul>
        </section>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <div>
          <img src="/zorin-small.png" alt="" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
