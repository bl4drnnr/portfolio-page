import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Technologies({ technologies }) {

  return (
    <>
      { Object.keys(technologies).map((key, i) => (
        <span key={i}>

          <span className={styles.post}><h3 className={'bold300'}>{key}</h3></span>

          <div className={styles.techList}>
            <ul>
              { Object.keys(technologies[key]).map((key2, idx) => (
                <li key={idx}>{key2}
                  { technologies[key][key2].map(key3 => (
                    <span key={key3.name} className={styles.badge}><Image src={key3.name} width={key3.w} height={key3.h} /></span>
                  )) }
                </li>
              )) }
            </ul>
          </div>

        </span>
      )) }
    </>
  )
}
