import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
  return (
    <div>
      <section className={classes.posts}>
        <div className={classes.container}>
          <Post/>
          <Post/>
        </div>
      </section>
    </div>
  );
}

export default Posts;
