import Link from "next/link"
import styles from "../styles/Project.module.scss"

export default function Home({ name, description, link }) {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.more}><Link href={link}><a className={"link blue"} target="_blank">More -></a></Link></span>
    </div>
  )
}
