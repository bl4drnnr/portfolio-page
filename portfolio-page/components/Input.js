import styles from "../styles/Input.module.scss";

export default function Input({ title }) {
  return (
    <span>
      <p className={styles.title}>{title}</p>
      <input type="text" className={styles.inputField}/>
    </span>
  )
}
