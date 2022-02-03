import React from "react";

const styles = {
  images: {
    height: '100px',
    width: '100px',
    borderRadius: '20px',
    padding: '10px'
  },
  boxText: {
    paddingLeft: '20px'
  },
  image: {
    width: '80px',
    height: '80px',
    margin: '0 auto'
  }
}

export default function Content(props) {
  return (
    <div>
      { props.content.map(c => {
        return (
          <div className="peaceOfContent" key={c.id}>
            <div style={styles.images}>
              <img style={styles.image} src={c.img} alt={c.id} />
            </div>
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

