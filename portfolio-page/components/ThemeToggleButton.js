import styles from "../styles/ThemeToggleButton.module.scss"
import Image from "next/image";

const setDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
};

const defaultDark = "dark"

const toggleTheme = (e) => {
  if (e.target.checked)
    setDark();
  else
    setLight();
};

export default function ThemeToggleButton() {
  return (
    <>
      <div>
        <input onChange={toggleTheme} defaultChecked={defaultDark}
          type="checkbox" className={styles.checkbox} id="checkbox"/>
          <label htmlFor="checkbox" className={styles.label}>
            <Image src={"/moon.svg"} width={13} height={13}/>
            <Image src={"/sun.svg"} width={13} height={13}/>
            <div className={styles.ball} />
          </label>
      </div>
    </>
  )
}
