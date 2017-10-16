import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => (
  <hgroup className="header">
    <h3 className="greeting">Hello, {currentUser.username}!</h3>
    <div className="profile-links">
      <Link className="events-link" to="/events">your events</Link>
      <Link className="profile" to="/profile">your info</Link>
    </div>
  </hgroup>
);

export default Profile;
