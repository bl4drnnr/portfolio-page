import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Project from "../components/Project"
import Technologies from "../components/Technologies"
import Contact from "../components/Contact"
import styles from "../styles/Home.module.scss"

export default function Home() {

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

          <Technologies />

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
