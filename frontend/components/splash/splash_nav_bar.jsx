import React from 'react';
import { Link } from 'react-router';

const SplashNavBar = () => (
  <nav className="splash-nav-bar">
    <nav className="left-nav">
      <Link to="/" activeClassName="current">Photon</Link>
    </nav>
    <nav className="right-nav">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;
      <Link to="/signup" activeClassName="current">Sign up</Link>
    </nav>
  </nav>
);

export default SplashNavBar;
