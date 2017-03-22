import React from 'react';
import { Link } from 'react-router';

const SplashNavBar = () => (
  <nav className="splash-nav-bar">
    <nav className="left-nav">
      <Link to="/" activeClassName="current">
        <i className="fa fa-bolt" aria-hidden="true"></i>PhotOn
      </Link>
    </nav>
    <nav className="right-nav">
      <Link to="/login" activeClassName="current">
        <i className="fa fa-sign-in" aria-hidden="true"></i>Login
      </Link>
      &nbsp;
      <Link to="/signup" activeClassName="current">
        <i className="fa fa-user-plus" aria-hidden="true"></i>Sign up
      </Link>
    </nav>
  </nav>
);

export default SplashNavBar;
