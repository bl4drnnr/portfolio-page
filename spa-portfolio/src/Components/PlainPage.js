import React from "react";

const styles = {
  aboutMe: {
    width: '100%',
    height: '50vh',
    backgroundColor: 'green'
  },
  myProject: {
    width: '100%',
    height: '50vh',
    backgroundColor: 'red'
  },
  contact: {
    width: '100%',
    height: '50vh',
    backgroundColor: 'blue'
  },
  img: {
    width: '50%',
    height: '100%',
    backgroundColor: 'lightpink'
  },
  imgRight: {
    width: '50%',
    height: '100%',
    backgroundColor: 'lightpink',
    float: 'right'
  }
}

export default function PlainPage() {
  return (
    <div className="plainPage">
      <div style={styles.aboutMe}>
        <div style={styles.img}>

        </div>
      </div>
      <div style={styles.myProject}>
        <div style={styles.imgRight}>

        </div>
      </div>
      <div style={styles.contact}>
        <div style={styles.img}>

        </div>
      </div>
    </div>
  )
}
