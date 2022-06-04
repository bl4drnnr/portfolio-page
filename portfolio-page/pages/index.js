import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikhail Bahdashych | Portfolio Page</title>
        <meta name="description" content="Mikhail Bahdashych Portfolio Page" />
        <meta name="keywords" content="Mikhail,Bahdashych,Portfolio,Page" />
        <meta name="author" content="Mikhail Bahdashych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.welcomeContainer}></div>
        <div className={styles.avatarContainer}>
          <Image src="/ava.jpeg" alt="Ava" width={350} height={350} className={styles.avatar} />
        </div>
        <div className={styles.content}></div>
      </main>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <span className={styles.logo}>*/}
      {/*      <Image src="/nextjslogo.png" alt="Vercel Logo" width={80} height={48} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}

    </div>
  )
}
