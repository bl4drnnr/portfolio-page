import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Technologies({ technologies }) {

  return (
    <>
      { Object.keys(technologies).map(key => (
        <span key={key}>

          <span className={styles.post}><h3 className={'bold300'}>{key}</h3></span>

          <div className={styles.techList}>
            <ol>
              { Object.keys(technologies[key]).map(key2 => (
                <li>{key2}
                  { technologies[key][key2].map(key3 => (
                    <span className={styles.badge}><Image src={key3.name} width={key3.w} height={key3.h} /></span>
                  )) }
                </li>
              )) }
            </ol>
          </div>

        </span>
      )) }
    </>
  )
}
