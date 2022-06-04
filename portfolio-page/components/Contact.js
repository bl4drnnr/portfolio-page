import Link from "next/link"
import Input from "./Input";
import styles from "../styles/Contact.module.scss"

export default function Contact() {
  return (
    <div>
      <div className={styles.contactForm}>
        <p>Email:<Link href={"mailto:mikhail.bahdashych@protonmail.com"}><a className={"link blue"}> mikhail.bahdashych@protonmail.com</a></Link></p>
        <p>PGP:<Link href={"https://keys.openpgp.org/vks/v1/by-fingerprint/8773E25F4E5B06F60AD9A04151E343BA669AD317"}><a className={"link blue"}> 8773E25F4E5B06F60AD9A04151E343BA669AD317</a></Link></p>
      </div>

      <div className={styles.contactFields}>
        <div className={styles.inputs}>
          <Input title={"Your name"} />
          <Input title={"Title"} />
        </div>
        <p>Message</p>
        <textarea className={styles.textAreaField}></textarea>
        <button className={styles.sendMessageButton}>SEND MESSAGE</button>
      </div>
    </div>
  )
}
