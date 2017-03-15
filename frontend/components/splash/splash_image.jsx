import React from 'react';
import { Link } from 'react-router';

const SplashImage = () => (
  <nav className="splash-image">
    <h3>Discover the beauty of science</h3>
    <Link to="/signup" activeClassName="current">Get Started</Link>
  </nav>
);

export default SplashImage;
