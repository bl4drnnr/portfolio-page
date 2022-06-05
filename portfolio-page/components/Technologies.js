import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Technologies({ technologies }) {

  return (
    <>
      { Object.keys(technologies).map((key, i) => (
        <span key={i}>

          <span className={styles.post}><h3 className={'bold300'}>{key}</h3></span>

          <div className={styles.techList}>
            <div>
              { Object.keys(technologies[key]).map((key2, idx) => (
                <div key={idx}>
                  <div>{key2}</div>
                  { technologies[key][key2].map(key3 => (
                    <span key={key3.name} className={styles.badge}><Image className={styles.image} src={key3.name} width={key3.w} height={key3.h} /></span>
                  )) }
                </div>
              )) }
            </div>
          </div>

        </span>
      )) }
    </>
  )
}
