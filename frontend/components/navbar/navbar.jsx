import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="navbar-div">
    <nav className="logged-out-navbar">
      <img className="logo" src="http://lokey.gr/wp-content/uploads/2016/05/lokey_logo_300.png"></img>
      <div className="navbar-links">
        <Link className="events-link" to="/events">events</Link>
        <Link className="create-event-link" to="/sign-in">create event</Link>
        <Link className="map-link" to="/map">map</Link>
        <Link className="sign-in-link" to="/sign-up">sign up</Link>
      </div>
    </nav>
  </div>
);

const loggedInSessionLinks = (currentUser, logout) => (
  <div className="navbar-div">
    <nav className="logged-in-navbar">
      <img src="http://lokey.gr/wp-content/uploads/2016/05/lokey_logo_300.png"></img>
      <div className="navbar-links">
        <Link className="events-link" to="/events">events</Link>
        <Link className="create-event-link" to="/events">create event</Link>
        <Link className="map-link" to="/map">map</Link>
        <Link className="profile" to="/profile">profile</Link>
      </div>
    </nav>
  </div>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? loggedInSessionLinks(currentUser, logout) : sessionLinks()
);

export default Navbar;
