import styles from "../styles/ThemeToggleButton.module.scss"
import Image from "next/image";
import { prefix } from "../prefix";

const setDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
};

const defaultLight = "light"

const toggleTheme = (e) => {
  if (e.target.checked)
    setLight();
  else
    setDark();

};

export default function ThemeToggleButton() {
  return (
    <>
      <div>
        <input onChange={toggleTheme} defaultChecked={defaultLight}
          type="checkbox" className={styles.checkbox} id="checkbox"/>
          <label htmlFor="checkbox" className={styles.label}>
            <Image src={`${prefix}/moon.svg`} width={13} height={13}/>
            <Image src={`${prefix}/sun.svg`} width={13} height={13}/>
            <div className={styles.ball} />
          </label>
      </div>
    </>
  )
}
