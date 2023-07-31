import React from 'react';
import classes from './Other.module.css';


const Other = () => {
  return (
    <button className={classes.other}>
      <img src="/images/other.svg"/>
      <p>
        OTHER
      </p>
    </button>
  );
}

export default Other;
