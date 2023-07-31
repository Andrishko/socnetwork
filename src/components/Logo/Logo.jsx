import React from 'react';
import classes from './Logo.module.css'

const Logo = () => {
  return (
      <a>
        <img src="/images/logo.svg" className={classes.logo} alt="" />
      </a>
  );
}

export default Logo;
