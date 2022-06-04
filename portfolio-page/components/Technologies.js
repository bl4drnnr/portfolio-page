import Image from "next/image"
import styles from "../styles/Home.module.scss"

export default function Technologies() {
  const technologies = {
    "Programming languages:": {
      "Primary stack:": [{
        name: "/js.svg",
        w: 126,
        h: 28
      }, {
        name: "/ts.svg",
        w: 126,
        h: 28
      }, {
        name: "/html5.svg",
        w: 88,
        h: 28
      }, {
        name: "/css.svg",
        w: 77,
        h: 28
      }],
      "Secondary stack:": [{
        name: "/python.svg",
        w: 97,
        h: 28
      }, {
        name: "/csharp.svg",
        w: 61,
        h: 28
      }],
      "Were touched:": [{
        name: "/java.svg",
        w: 77,
        h: 28
      }, {
        name: "/dart.svg",
        w: 79,
        h: 28
      }, {
        name: "/swift.svg",
        w: 87,
        h: 28
      }]
    },
    "Frameworks:": {
      "Primary stack:": [{
        name: "/node.svg",
        w: 101,
        h: 28
      }, {
        name: "/vue.svg",
        w: 85,
        h: 28
      }, {
        name: "/nuxt.svg",
        w: 80,
        h: 28
      }, {
        name: "/express.svg",
        w: 122,
        h: 28
      }],
      "Secondary stack:": [{
        name: "/react.svg",
        w: 85,
        h: 28
      }, {
        name: "/next.svg",
        w: 78,
        h: 28
      }, {
        name: "/nest.svg",
        w: 92,
        h: 28
      }],
      "Were touched:": [{
        name: "/flutter.svg",
        w: 101,
        h: 28
      }, {
        name: "/flask.svg",
        w: 82,
        h: 28
      }, {
        name: "/django.svg",
        w: 98,
        h: 28
      }]
    }
  }

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
