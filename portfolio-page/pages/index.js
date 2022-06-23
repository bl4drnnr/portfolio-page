import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Project from "../components/Project"
import Technologies from "../components/Technologies"
import ThemeToggleButton from "../components/ThemeToggleButton";
import Contact from "../components/Contact"
import styles from "../styles/Home.module.scss"
import Typewriter from 'typewriter-effect';
import {useState} from "react";

export default function Home() {

  const [discordState, setDiscordState] = useState('Discord')

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

  const technologies = {
    "Programming languages:": {
      "Primary stack:": [{
        name: "/js.svg",
        w: 170,
        h: 40
      }, {
        name: "/ts.svg",
        w: 170,
        h: 40
      }, {
        name: "/python.svg",
        w: 120,
        h: 40
      }, {
        name: "/csharp.svg",
        w: 90,
        h: 40
      }],
      "Secondary stack:": [{
        name: "/html5.svg",
        w: 120,
        h: 40
      }, {
        name: "/css.svg",
        w: 100,
        h: 40
      }]
    },
    "Frameworks:": {
      "Primary stack:": [{
        name: "/node.svg",
        w: 130,
        h: 40
      }, {
        name: "/nest.svg",
        w: 120,
        h: 40
      }, {
        name: "/express.svg",
        w: 150,
        h: 40
      }],
      "Secondary stack:": [{
        name: "/react.svg",
        w: 120,
        h: 40
      }, {
        name: "/next.svg",
        w: 110,
        h: 40
      }, {
        name: "/vue.svg",
        w: 120,
        h: 40
      }, {
        name: "/nuxt.svg",
        w: 120,
        h: 40
      }],
      "Were touched:": [{
        name: "/flask.svg",
        w: 110,
        h: 40
      }, {
        name: "/django.svg",
        w: 120,
        h: 40
      }, {
        name: "/dotnet.svg",
        w: 100,
        h: 40
      }]
    },
    "Other technologies:": {
      "Databases:": [{
        name: "/mssql.svg",
        w: 250,
        h: 40
      }, {
        name: "/mongo.svg",
        w: 150,
        h: 40
      }, {
        name: "/mysql.svg",
        w: 120,
        h: 40
      }, {
        name: "/postgres.svg",
        w: 160,
        h: 40
      }, {
        name: "/sqlite.svg",
        w: 130,
        h: 40
      }],
      "DevOps:": [{
        name: "/docker.svg",
        w: 130,
        h: 40
      }, {
        name: "/aws.svg",
        w: 100,
        h: 40
      }, {
        name: "/azure.svg",
        w: 120,
        h: 40
      }, {
        name: "/firebase.svg",
        w: 130,
        h: 40
      }, {
        name: "/netlify.svg",
        w: 130,
        h: 40
      }],
    }
  }

  const copyToClipBoard = async copyText => {
    await navigator.clipboard.writeText(copyText);

    setDiscordState('Discord tag has been copied')
    setTimeout(() => {
      setDiscordState('Discord')
    }, 5000)
  };

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

        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeTexts}>
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('THE FUTURE IS HERE. THE FUTURE IS NOW.').start();
                }}
                options={{
                  delay: 100
                }}
              />
            </h1>
          </div>
        </div>


        <div className={styles.infoContainer}>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Mikhail Bahdashych').start();
              }}
              options={{
                delay: 175
              }}
            />
          </h1>
          <h3>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Full Stack Web Developer / Cybersecurity engineer').start();
              }}
              options={{
                delay: 75
              }}
            />
          </h3>
          <p>
            <Link href={socialMediaLinks.gt}><a target="_blank">GitHub</a></Link> / <Link href={socialMediaLinks.li}><a target="_blank">LinkedIn</a></Link> / <Link href={socialMediaLinks.tw}><a target="_blank">Twitter</a></Link> / <span className={"link"} onClick={() => copyToClipBoard('bl4drnnr#6177')}
          >{discordState}</span>
          </p>
          <ThemeToggleButton />
        </div>

      </main>

      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>

          <h1>About me</h1>
          <p className={styles.post}>Hello there, my name is Mikhail Bahdashych (19 y.o)! I am full stack web developer from Belarus, who is currently living in Poland. This page is just my portfolio, where you can find everything about me as about developer - ToolBox, work experience, example projects and contact form.</p>
          <p className={styles.post}>Generally speaking, as web developer, I am interested in modern web technologies, network technologies, Development & Operations and cybersecurity. TypeScript/JavaScript is my primary development programming languages stack. Also, I am very interested in cryptocurrencies and trading is my main hobby (except playing electoguitar, I could be rockstar, but you're reading this *sadface*).</p>
          <h1>ToolBox</h1>
          <p className={styles.post}>Here is the list of all programming languages, frameworks and technologies that I work with and use in my projects / was working with / worked with:</p>

          <Technologies technologies={technologies} />

          <h1>My projects</h1>
          <p className={styles.post}>Below you can find a list of my projects, as well as short description and the source code for them. The entire source code, as well as a more detailed description of all projects, can be found at my <Link href={"https://github.com/bl4drnnr"}><a target="_blank" className={"link blue"}>GitHub</a></Link> page.</p>
          <div className={styles.projectBox}>
            <Project name={"Page portfolio"} description={"Source code of this portfolio Next.js page."} link={projectLinks.portfolio} />
            <Project name={"Giftify store"} description={"One of the biggest project. Online store with giftcards."} link={""} />
            <Project name={"Pentesters' notes"} description={"Website dedicated to cybersecurity with blog section, forum and live chat."} link={projectLinks.forum} />
          </div>
          <div className={styles.projectBox}>
            <Project name={"MAL - Market alarmer"} description={"Python telegram bot that notifies you when value market price hits the trigger."} link={""} />
            <Project name={"PCM - Pocket Crypto Market"} description={"Python telegram bot with HTTP TypeScript Express.js server that allows you to buy and sell crypto."} link={projectLinks.pcm} />
            <Project name={"Pear2Pear - 🍐"} description={"Python telegram bot - P2P crypto marketplace and allows users to buy, sell and trade crypto strict from each other."} link={""} />
          </div>

          <h1>Certificates</h1>
          <ul>
            <li>CCNA v7: Introduction to networking</li>
            <li>CCNA v7: Networking essentials</li>
            <li>CCNA v7: Introduction to cybersecurity</li>
            <li>CCNA v7: Cybersecurity essentials</li>
          </ul>

          <h1>Ways to contact me</h1>
          <p className={styles.post}>In case if you want to contact me, use this form or text my directly wherever you want (see my social media above), or text me directly on this email:</p>

          <Contact />

        </div>
      </div>


      <footer className={styles.footer}>
        <p className={styles.poweredBy}>Powered by{" "}</p>
        <span>
              <Image src="/nextjslogo.svg" alt="Next.js Logo" width={80} height={48} />
            </span>
      </footer>

    </div>
  )
}
