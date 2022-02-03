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
  textWrap: {
    width: '50%',
  },
  text: {
    padding: '35px'
  }
}

export default function PlainPage() {
  return (
    <div className="plainPage">
      <div style={styles.aboutMe}>
        <div style={styles.img} />
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis, eveniet ipsam maiores minima repellat? Accusamus debitis, error et fugiat hic id incidunt neque nisi nulla odit perferendis qui quo quod recusandae rem veritatis voluptate. Autem blanditiis fuga harum temporibus totam. Culpa cum facere facilis inventore laborum, maxime perferendis quisquam ullam. Animi consequatur consequuntur corporis cumque deserunt dolorem excepturi exercitationem, expedita fuga iste iure maiores, minus nisi nulla numquam quia quo quod reprehenderit similique tempora tempore voluptas voluptatibus. Aliquid atque consequatur debitis eligendi eos facilis incidunt ipsa perferendis placeat quis! Culpa, inventore quae? Cum ducimus est excepturi expedita, itaque modi molestiae omnis porro repellendus rerum soluta, totam unde. Atque exercitationem odio pariatur sed ut. Beatae consequuntur inventore nisi numquam pariatur quae quisquam repudiandae tempore. Blanditiis consequatur culpa cumque, delectus doloremque dolorum eaque enim et id illum ipsam iure maxime nemo officia perferendis porro provident quibusdam quisquam recusandae repudiandae sint, veritatis.</code>
          </div>
        </div>
      </div>
      <div style={styles.myProject}>
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at blanditiis consequatur consequuntur debitis dolorum eligendi fuga id in ipsum iure iusto, laborum magnam nisi nobis numquam perspiciatis qui rerum sapiente sint suscipit temporibus tenetur veniam! Adipisci aspernatur debitis delectus dicta dolore esse facilis hic laboriosam libero magnam molestias nobis quae, quas sed sint suscipit tempore ut. Accusantium aliquam animi architecto asperiores atque, corporis cumque delectus dicta earum incidunt labore maxime mollitia neque provident quaerat quas quis quisquam repudiandae sapiente temporibus velit veniam voluptatem. Accusantium adipisci alias, autem cumque dignissimos distinctio dolorum exercitationem expedita fugiat magni molestiae omnis, repudiandae soluta? Consectetur doloremque dolorum excepturi fugiat perferendis! Accusamus ad architecto, atque commodi consequatur dolor dolore ducimus eos et expedita facilis harum hic impedit laudantium nostrum odio quaerat, quam quas quisquam quos suscipit veritatis, vero voluptatum? Corporis dolorem exercitationem ipsa obcaecati optio perferendis perspiciatis praesentium quaerat reprehenderit soluta velit, voluptates.</code>
          </div>
        </div>
        <div style={styles.imgRight} />
      </div>
      <div style={styles.contact}>
        <div style={styles.img} />
        <div style={styles.textWrap}>
          <div style={styles.text}>
            <code>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi labore nam perspiciatis quis sapiente! Adipisci at atque autem commodi culpa debitis delectus, eum eveniet ex illum in incidunt inventore maxime minus necessitatibus omnis perferendis placeat quod ratione, saepe sequi velit veniam, vero? Commodi culpa, dicta eaque minima ratione rem veritatis? Accusamus hic maiores nisi, numquam odio omnis quae quia rem repudiandae sapiente sequi similique sunt, tenetur vero voluptatum! Alias, atque, cumque debitis earum eum expedita hic molestias mollitia officiis quae quam, quas quidem repudiandae sunt tenetur ullam vel? Accusamus aperiam, blanditiis commodi cupiditate distinctio dolorum est id inventore nam natus, odio placeat porro provident quia quis repellat suscipit, voluptatum! Animi commodi dignissimos eius eos, laudantium nam nesciunt non qui quod sapiente soluta tenetur. Animi autem consequuntur cum dolorem dolores eveniet hic illum labore laboriosam nihil nisi nostrum, obcaecati officia perspiciatis placeat porro quaerat quam quod recusandae tempora velit veniam voluptatum.</code>
          </div>
        </div>
      </div>
    </div>
  )
}
