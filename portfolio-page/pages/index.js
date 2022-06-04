import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Project from "../components/Project"
import Technologies from "../components/Technologies"
import Contact from "../components/Contact"
import styles from "../styles/Home.module.scss"

export default function Home() {

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
    },
    "Other technologies:": {
      "Databases:": [{
        name: "/mssql.svg",
        w: 200,
        h: 28
      }, {
        name: "/mongo.svg",
        w: 110,
        h: 28
      }, {
        name: "/mysql.svg",
        w: 88,
        h: 28
      }, {
        name: "/postgres.svg",
        w: 113,
        h: 28
      }, {
        name: "/sqlite.svg",
        w: 92,
        h: 28
      }],
      "DevOps:": [{
        name: "/docker.svg",
        w: 98,
        h: 28
      }, {
        name: "/aws.svg",
        w: 74,
        h: 28
      }, {
        name: "/azure.svg",
        w: 87,
        h: 28
      }, {
        name: "/firebase.svg",
        w: 109,
        h: 28
      }, {
        name: "/netlify.svg",
        w: 100,
        h: 28
      }],
      "ORM's:": [{
        name: "/sequalize.svg",
        w: 117,
        h: 28
      }, {
        name: "/prisma.svg",
        w: 95,
        h: 28
      }, {
        name: "/hibernate.svg",
        w: 70,
        h: 28
      }],
      "Package managers:": [{
        name: "/yarn.svg",
        w: 80,
        h: 28
      }, {
        name: "/npm.svg",
        w: 73,
        h: 28
      }],
      "Other:": [{
        name: "/latex.svg",
        w: 85,
        h: 28
      }, {
        name: "/jwt.svg",
        w: 71,
        h: 28
      }],
    }
  }

  const socialMediaLinks = {
    gt: "https://github.com/bl4drnnr",
    tw: "https://twitter.com/bl4drnnr",
    li: "https://www.linkedin.com/in/mikhail-bahdashych-a8561a209 "
  }

  const projectLinks = {
    portfolio: "https://github.com/bl4drnnr/portfolio-page",
    pcm: "https://github.com/bl4drnnr/PCM-pocket-crypto-market",
    forum: "https://github.com/bl4drnnr/Pentester-note-blog-front"
  }

  return (
    <div>
      <Head>
        <title>Mikhail Bahdashych | Portfolio Page</title>
        <meta name="description" content="Mikhail Bahdashych Portfolio Page" />
        <meta name="keywords" content="Mikhail,Bahdashych,Portfolio,Page" />
        <meta name="author" content="Mikhail Bahdashych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.welcomeContainer}></div>

        <div className={styles.avatarContainer}>
          <div className={styles.avatarBox}>
            <Image src="/ava.jpeg" alt="Ava" width={300} height={300} className={styles.avatar} />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h1>Mikhail Bahdashych</h1>
          <h3>Full Stack Web Developer / Cybersecurity engineer</h3>
          <p>
            <Link href={socialMediaLinks.gt}><a target="_blank">GitHub</a></Link> / <Link href={socialMediaLinks.li}><a target="_blank">LinkedIn</a></Link> / <Link href={socialMediaLinks.tw}><a target="_blank">Twitter</a></Link> / <span className={"link"}>Discord</span>
          </p>
        </div>

      </main>

      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>

          <h1>About me</h1>
          <p className={styles.post}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur, cupiditate eius facilis, ipsa ipsum laudantium libero quae quod ratione recusandae rerum sint, soluta suscipit tempora vel voluptate voluptates. Blanditiis, doloremque est iste laborum laudantium nobis, perferendis quaerat sequi sint, sunt ut vel vitae. Cumque dolorem incidunt quos rem voluptas?</p>
          <h1>ToolBox</h1>
          <p className={styles.post}>Here is the list of <span className={'bold500'}>ALL</span> technologies, programming languages and frameworks that I work with and use in my projects / used to work with / worked with / or even just "touched":</p>

          <Technologies technologies={technologies} />

          <h1>My projects</h1>
          <p className={styles.post}>Below you can find a list of my projects, as well as short description and the source code for them. The entire source code, as well as a more detailed description of all projects, can be found at my <Link href={"https://github.com/bl4drnnr"}><a className={"link blue"}>GitHub</a></Link> page.</p>
          <div className={styles.projectBox}>
            <Project name={"Page portfolio"} description={"Source code of this portfolio Next.js page."} link={projectLinks.portfolio} />
            <Project name={"PCM - Pocket Crypto Market"} description={"Telegram bot with HTTP TypeScript Express.js server that allows you to buy and sell crypto."} link={projectLinks.pcm} />
            <Project name={"Forum"} description={"Forum dedicated to cybersecurity with login and registration system."} link={projectLinks.forum} />
          </div>

          <h1>Ways to contact me</h1>
          <p className={styles.post}>In case if you want to contact me, use this form or text my directly wherever you want (see my social media above), or text me directly on this email:</p>

          <Contact />

        </div>
      </div>


      <footer className={styles.footer}>
        <p className={styles.poweredBy}>Powered by{" "}</p>
        <span>
          <Image src="/nextjslogo.png" alt="Next.js Logo" width={80} height={48} />
        </span>
      </footer>

    </div>
  )
}
