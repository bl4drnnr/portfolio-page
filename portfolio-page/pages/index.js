import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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

    </div>
  )
}
