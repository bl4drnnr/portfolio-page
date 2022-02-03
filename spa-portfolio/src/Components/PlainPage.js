import React from "react";

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
    backgroundColor: 'lightpink',
    borderRadius: '65px'
  },
  imgRight: {
    width: '50%',
    height: '100%',
    backgroundColor: 'lightpink',
    float: 'right',
    borderRadius: '65px'
  },
  text: {
    width: '50%'
  }
}

export default function PlainPage() {
  return (
    <div className="plainPage">
      <div style={styles.aboutMe}>
        <div style={styles.img} />
        <div><h1>asd</h1></div>
      </div>
      <div style={styles.myProject}>
        <div style={styles.text}><h1>asd</h1></div>
        <div style={styles.imgRight} />
      </div>
      <div style={styles.contact}>
        <div style={styles.img} />
        <div><h1>asd</h1></div>
      </div>
    </div>
  )
}
