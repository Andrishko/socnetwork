import React from 'react';
import classes from './Main.module.css'
import Midle from '../Midle/Midle';
import Logo from '../Logo/Logo';
import SideBar from '../SideBar/SideBar';
import Other from '../Other/Other';

const Main = () => {
  return (
    <div className={classes.content}>
      <Logo />
      <Midle />
      <SideBar />
      <Other />
    </div>
  );
}

export default Main;
