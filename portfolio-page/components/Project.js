import Link from "next/link"
import styles from "../styles/project.module.scss"

export default function Home({ name, description }) {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>{description}</p>
      <a className={"link blue"}>More -></a>
    </div>
  )
}
