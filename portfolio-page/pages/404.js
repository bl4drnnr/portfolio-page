import Head from "next/head"
import Link from "next/link"
import styles from "../styles/404.module.scss";

export default function ErrorPage() {
  return (
    <div>

      <Head>
        <title>Mikhail Bahdashych | 404</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.errors}>
          <h1>Nah... C'mon, this is portfolio, there are no routers here :(</h1>
          <h2><Link href={"/"}><a>Go back home</a></Link></h2>
        </div>
      </main>
    </div>
  )
}
