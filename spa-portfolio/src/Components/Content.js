import React from "react";

const styles = {
  image: {
    height: '100px',
    width: '100px',
    backgroundColor: 'black',
    borderRadius: '20px'
  },
  boxText: {
    paddingLeft: '20px'
  },
}

export default function Content(props) {
  return (
    <div>
      { props.content.map(c => {
        return (
          <div className="peaceOfContent">
            <div style={styles.image} />
            <div style={styles.boxText}>
              <h2>{c.title}</h2>
              <h4>{c.info}</h4>
            </div>
          </div>
        )
      }) }
    </div>
  );
}

