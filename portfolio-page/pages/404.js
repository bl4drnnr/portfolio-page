import styles from "../styles/404.module.scss";

export default function ErrorPage() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.errors}>
          <h1>Nah... C'mon, this is portfolio, there are no routers here :(</h1>
          <h2>Go back home</h2>
        </div>
      </main>
    </div>
  )
}
