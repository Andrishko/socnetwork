import React from 'react';
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.post_top}>
        <img className={classes.image} src='/images/post.png' />
        <div>
          <p className={classes.name}>
            Theresa Steward
          </p>
          <p className={classes.job}>
            iOS developer
          </p>
        </div>
      </div>
      <div className={classes.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate cum dolorum, itaque maxime amet assumenda quidem totam error exercitationem voluptate cumque quae, laboriosam quo nesciunt fugit asperiores hic? Mollitia!
        </p>
      </div>
    </div>
  );
}

export default Post;
