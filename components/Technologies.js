import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Technologies({ technologies }) {

  return (
    <>
      { Object.keys(technologies).map((key, i) => (
        <span key={i}>

          <div className={styles.techList}>
            { Object.keys(technologies[key]).map((key2, idx) => (
              <div key={idx}>
                { technologies[key][key2].map(key3 => (
                  <span key={key3.name} className={styles.badge}><Image className={styles.image} src={"/home" + key3.name} width={key3.w} height={key3.h} /></span>
                )) }
              </div>
            )) }
            <hr/>
          </div>

        </span>
      )) }
    </>
  )
}
