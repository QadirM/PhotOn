import React from 'react';
import { Link } from 'react-router';

const SplashImage = () => (
  <nav className="splash-welcome">
    <h3>A photography community for you</h3>
    <Link to="/signup" activeClassName="current">Get Started</Link>
  </nav>
);

export default SplashImage;
