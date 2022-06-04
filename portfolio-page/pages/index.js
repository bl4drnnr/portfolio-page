import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/styles.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mikhail Bahdashych | Portfolio Page</title>
        <meta name="keywords" content="Mikhail,Bahdashych,Portfolio,Page" />
        <meta name="description" content="Mikhail Bahdashych Portfolio Page" />
        <meta charSet="utf-8" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/*<Image src="/nextjslogo.png" alt="Vercel Logo" width={72} height={16} />*/}
          </span>
        </a>
      </footer>
    </div>
  )
}
