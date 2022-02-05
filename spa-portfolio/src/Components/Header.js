import React from "react";

const styles = {
  header: {
    width: '100%',
    height: '75px',
    position: 'absolute',
  },
  innerHeader: {
    margin: '0 auto',
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}

export default function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.innerHeader}>
        <p className="headerAndFooterLinks">About me</p>
        <p className="headerAndFooterLinks">My projects</p>
        <p className="headerAndFooterLinks">Contact</p>
      </div>
    </div>
  )
}
