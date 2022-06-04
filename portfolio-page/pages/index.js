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
          <h3>Full Stack Web Developer / Cybersecurity engineer</h3>
          <p>GitHub / LinkedIn / Twitter / Discord</p>
        </div>

      </main>

      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur, cupiditate eius facilis, ipsa ipsum laudantium libero quae quod ratione recusandae rerum sint, soluta suscipit tempora vel voluptate voluptates. Blanditiis, doloremque est iste laborum laudantium nobis, perferendis quaerat sequi sint, sunt ut vel vitae. Cumque dolorem incidunt quos rem voluptas?</p>
          <h1>My projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur, cupiditate eius facilis, ipsa ipsum laudantium libero quae quod ratione recusandae rerum sint, soluta suscipit tempora vel voluptate voluptates. Blanditiis, doloremque est iste laborum laudantium nobis, perferendis quaerat sequi sint, sunt ut vel vitae. Cumque dolorem incidunt quos rem voluptas?</p>
          <h1>Ways to contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur, cupiditate eius facilis, ipsa ipsum laudantium libero quae quod ratione recusandae rerum sint, soluta suscipit tempora vel voluptate voluptates. Blanditiis, doloremque est iste laborum laudantium nobis, perferendis quaerat sequi sint, sunt ut vel vitae. Cumque dolorem incidunt quos rem voluptas?</p>
        </div>
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
