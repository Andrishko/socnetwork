import React from 'react';
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={classes.content__sidebar}>
      <div className={classes.profile}>
        <img src="/images/profile.png" className={classes.profile_img} />
        <div className={classes.text}>
          <p className={classes.name}>D. Kargaev <span className={classes.you}>YOU</span></p>
          <p className={classes.views}>367 views today <span className={classes.numbers}>+32</span></p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
