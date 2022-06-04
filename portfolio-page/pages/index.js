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
          <div className={styles.avatarBox}>
            <Image src="/ava.jpeg" alt="Ava" width={300} height={300} className={styles.avatar} />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h1>Mikhail Bahdashych</h1>
          <p>Full Stack Web Developer / Cybersecurity engineer</p>
        </div>

      </main>

      <div className={styles.contentContainer}>
      </div>


      <footer className={styles.footer}>
        <p className={styles.poweredBy}>Powered by{' '}</p>
        <span>
            <Image src="/nextjslogo.png" alt="Next.js Logo" width={80} height={48} />
          </span>
      </footer>

    </div>
  )
}
