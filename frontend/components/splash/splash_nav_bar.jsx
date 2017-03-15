import React from 'react';
import { Link } from 'react-router';

const SplashNavBar = () => (
  <nav className="splash-nav-bar">
    <nav className="logo">
      <i className="fa fa-camera" aria-hidden="true"></i>
      &nbsp;
      <Link to="/" activeClassName="current">Photon</Link>
    </nav>
    <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
    </nav>
  </nav>
);

export default SplashNavBar;
