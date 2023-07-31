import React from 'react';
import classes from './Midle.module.css'
import Feed from './Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import Chats from './Chats/Chats';
import Layout from './Layout/Layout';


const Midle = () => {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Feed />} />
          <Route path="chat/*" element={<Chats />} />
        </Route>
      </Routes>

    </div>
  );
}

export default Midle;
