import React from "react";
import Content from "./Content";

const styles = {
  aboutMe: {
    width: '100%',
    height: '50vh',
    display: 'flex'
  },
  myProject: {
    width: '100%',
    height: '50vh',
    display: 'flex'
  },
  contact: {
    width: '100%',
    height: '50vh',
    display: 'flex'
  },
  img: {
    width: '50%',
    height: '100%',
    backgroundColor: '#131313',
    borderTopLeftRadius: '65px',
  },
  imgRight: {
    width: '50%',
    height: '100%',
    backgroundColor: '#131313',
    float: 'right',
  },
  imgBottom: {
    width: '50%',
    height: '100%',
    backgroundColor: '#131313',
    borderBottomLeftRadius: '65px'
  },
  textWrap: {
    width: '50%',
  },
  text: {
    padding: '35px'
  },
  content: {
    paddingTop: '35px'
  }
}

export default function PlainPage() {
  const contactItems = [{}, {}, {}]
  return (
    <div className="plainPage">
      <div style={styles.aboutMe}>
        <div style={styles.img}>
          <div style={styles.content}>
            <Content />
          </div>
        </div>
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code><span className="begin">Hello</span>, my name is ..., nickname is bl4drnnr. I'm web developer from Belarus, who lives in Poland now. The story of this SPA creation is fun. When I have created something you can find below (in short, this is my blog), I have recognized that this works on 5 docker containers and on AWS for free trial I have only 1 instance with 1 GM RAM (lol) and it was impossible to deploy it that way, as a result you see this.</code>
          </div>
          <div style={styles.text}>
            <code><span className="begin">The</span> idea of blog project was to learn front-end and DevOps staff, you can find more there, but, unfortunately (or maybe not), I have to create this page, create CI/CD, jenkins pipelines and so on before I deploy my blog on something that has more then 1 GB RAM just to learn and even learn you how to do this ;)</code>
          </div>
        </div>
      </div>
      <div style={styles.myProject}>
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code><span className="begin">Here</span> is the list of my projects. I will do my best to make this list longer and longer...</code>
          </div>
        </div>
        <div style={styles.imgRight} />
      </div>
      <div style={styles.contact}>
        <div style={styles.imgBottom} />
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code><span className="begin">And</span> here is the list of places where you can find and text me, feel free to do it, I'll be glad to receive any feedback.</code>
          </div>
        </div>
      </div>
    </div>
  )
}
