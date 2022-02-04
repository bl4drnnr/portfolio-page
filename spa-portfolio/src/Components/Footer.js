import React from "react";

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#131313',
    position: 'absolute',
    marginTop: 'calc(150vh + 75px)',
    zIndex: '2'
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
          <p className="footerText">About me</p>
          <p className="footerText">My projects</p>
          <p className="footerText">Contact</p>
        </div>
        <div style={styles.copyright}>
          <p className="footerText">All rights reserved &copy; 2022</p>
        </div>
      </div>
    </div>
  )
}
