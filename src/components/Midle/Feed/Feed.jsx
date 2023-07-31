import React from 'react';
import Posts from './Posts/Posts';
import classes from './Feed.module.css'

const Feed = () => {
  return (
    <section className={classes.feed}>
      <div className={classes.newPost}>
        <div className={classes.container}>
          <p className={classes.newPost_text}>
            NEW POST
          </p>
          <div className={classes.newPost_workflow}>
            <textarea placeholder="What’s on your mind?"></textarea>
            <button>
              <img src="/images/paperclip.svg" alt="" />
            </button>
            <button>
              <img src="/images/paperclip.svg" alt="" />
            </button>
            <button>
              <img src="/images/paperclip.svg" alt="" />
            </button>
            <button>
              <img src="/images/paperclip.svg" alt="" />
            </button>

          </div>
        </div>
      </div>
      <Posts />
    </section>
  );
}

export default Feed;
