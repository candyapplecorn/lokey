import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="navbar-div">
    <nav className="logged-out-navbar">
      <img className="logo" src="http://res.cloudinary.com/daesquwob/image/upload/v1508121498/LoKey_logo_p9vf9v.png"></img>
      <div className="navbar-links">
        <Link className="events-link" to="/events">events</Link>
        <Link className="map-link" to="/map">map</Link>
        <Link className="sign-in-link" to="/sign-up">sign up</Link>
        <Link className="sign-in-link" to ="/sign-in">sign in</Link>
      </div>
    </nav>
  </div>
);

const loggedInSessionLinks = (currentUser, logout) => (
  <div className="navbar-div">
    <nav className="logged-in-navbar">
      <img className="logo" src="http://res.cloudinary.com/daesquwob/image/upload/v1508121498/LoKey_logo_p9vf9v.png"></img>
      <div className="navbar-links">
        <Link className="events-link" to="/events">events</Link>
        <Link className="map-link" to="/map">map</Link>
        <Link className="profile" to="/profile">profile</Link>
        <button className="logout" onClick={logout}>log out</button>
      </div>
    </nav>
  </div>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? loggedInSessionLinks(currentUser, logout) : sessionLinks()
);

export default Navbar;
