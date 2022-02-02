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
  }
}

export default function PlainPage() {
  return (
    <div className="plainPage">
      <div style={styles.aboutMe}>

      </div>
      <div style={styles.myProject}>

      </div>
      <div style={styles.contact}>

      </div>
    </div>
  )
}
