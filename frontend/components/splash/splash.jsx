import React from 'react';
import { Link } from 'react-router';
import SplashNavBar from './splash_nav_bar';
import SplashImage from './splash_image';
const Splash = () => (
  <nav className="splash">
    <nav className="splash-layer">
      <SplashNavBar />
      <SplashImage />
    </nav>
  </nav>
);

export default Splash;
