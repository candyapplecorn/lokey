import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="navbar-div">
    <nav className="logged-out-navbar">
      <Link className="events-link" to="/events">events</Link>
      <Link className="create-event-link" to="/sign-in">create event</Link>
      <Link className="map-link" to="/map">map</Link>
      <Link className="sign-in-link" to="/sign-up">sign up</Link>
    </nav>
  </div>
);

const loggedInSessionLinks = (currentUser, logout) => (
  <div className="navbar-div">
    <nav className="logged-in-navbar">
      <Link className="events-link" to="/events">events</Link>
      <Link className="create-event-link" to="/events">create event</Link>
      <Link className="map-link" to="/map">map</Link>
      <Link className="profile" to="/profile">profile</Link>
    </nav>
  </div>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? loggedInSessionLinks(currentUser, logout) : sessionLinks()
);

export default Navbar;
