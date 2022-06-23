import styles from "../styles/ThemeToggleButton.module.scss"
import Image from "next/image";

export default function ThemeToggleButton() {
  return (
    <>
      <div>
        <input type="checkbox" className={styles.checkbox} id="checkbox" />
          <label htmlFor="checkbox" className={styles.label}>
            <Image src={"/moon.svg"} width={13} height={13}/>
            <Image src={"/sun.svg"} width={13} height={13}/>
            <div className={styles.ball} />
          </label>
      </div>
    </>
  )
}
