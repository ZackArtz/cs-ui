import Head from 'next/head'
import styles from '../components/layout.module.css'
import CodeSubmit from '../components/codesubmit'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Share</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Code Share!
        </h1>

        <p className={styles.description}>
          Get started by <code>uploading some code!</code>
        </p>

        <CodeSubmit />

      </main>

      <footer>
          Built by Zack
      </footer>

      <style jsx>{`
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
