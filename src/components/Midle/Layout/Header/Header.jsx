import React from 'react';
import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <container className={classes.container}>
        <div className={classes.header__inner}>
          <nav>
            <ul className={classes.navbar}>
              <Link className={classes.navbar_link} to="/">
                <img className={classes.navbar_img} src="/images/feed.svg" alt="" />
                <p className={classes.navbar_text}>FEED</p>
              </Link>
              <Link className={classes.navbar_link} to="/network">
                <img className={classes.navbar_img} src="/images/network.svg" alt="" />
                <p className={classes.navbar_text}>NETWORK</p>
              </Link>
              <Link className={classes.navbar_link} to="/jobs">
                <img className={classes.navbar_img} src="/images/jobs.svg" alt="" />
                <p className={classes.navbar_text}>JOBS</p>
              </Link>
              <Link className={classes.navbar_link} to="/chat">
                <img className={classes.navbar_img} src="/images/chat.svg" alt="" />
                <p className={classes.navbar_text}>CHAT</p>
              </Link>
              <Link className={classes.navbar_link} to="/notices">
                <img className={classes.navbar_img} src="/images/notices.svg" alt="" />
                <p className={classes.navbar_text}>NOTICES</p>
              </Link>
            </ul>
          </nav>
          <div className={classes.search}>
            <img className={classes.search_img} src='/images/search.svg' />
            <textarea className={classes.searchbar} name="" id="" placeholder="Search"></textarea>
          </div>
        </div>
      </container>
    </header>
  );
}

export default Header;
