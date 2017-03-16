import React from 'react';
import { Link } from 'react-router';

const Home = ({currentUser, logout}) => {
  let name = currentUser ? currentUser.username : "";
  return (
  	<hgroup className="header-group">
      <h2 className="header-name">Hi, {name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</hgroup>
  );
};

export default Home;
