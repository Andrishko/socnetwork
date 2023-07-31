import React from 'react';
import classes from './Chats.module.css'
import { Link, Route, Routes } from 'react-router-dom';
import Chat from './Chat/Chat';

const Chats = () => {
  return (
    <section className={classes.chats}>
      <div className={classes.people}>
        <ul>
          <li>
            <Link to='1'>Андрій</Link>
          </li>
          <li>
            <Link to='2'>Валера</Link>
          </li>
          <li>
            <Link to='3'>Софійка</Link>
          </li>
        </ul>
      </div>
      <div className={classes.chat}>
        <Routes>
          <Route path='1' element={<Chat />} />
          <Route path='2' element={<Chat />} />
          <Route path='3' element={<Chat />} />
        </Routes>
      </div>

    </section>
  );
}

export default Chats;
