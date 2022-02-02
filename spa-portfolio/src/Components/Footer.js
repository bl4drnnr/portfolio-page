import React from "react";

const styles = {
  footer: {
    width: '100%',
    backgroundColor: 'lightblue',
    height: '75px',
  },
  innerFooter: {
    margin: '0 auto',
    width: '50%',
    height: '100%',
    display: 'flex',
  },
  links: {
    width: '50%',
    display: 'flex',
  },
  copyright: {
    width: '50%',
    display: 'flex',
    justifyContent: 'right'
  }
}

export default function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.innerFooter}>
        <div style={styles.links}>
          <p>About me</p>
          <p>My projects</p>
          <p>Contact</p>
        </div>
        <div style={styles.copyright}>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
