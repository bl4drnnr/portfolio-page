import styles from "../styles/Input.module.scss";

export default function Input({ title }) {
  return (
    <div className={styles.inputContainer}>
      <p className={styles.title}>{title}</p>
      <input type="text" className={styles.inputField}/>
    </div>
  )
}
