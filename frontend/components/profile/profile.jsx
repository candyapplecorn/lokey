import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => (
  <div id="profile">
    <h1 className="">Hello, {currentUser.username}!</h1>
    <div className='button-container'>
      {/* my events */}
      <div className="detail-button">
        <h3>Events</h3>
        <i className="fa fa-calendar" aria-hidden="true"></i>
      </div>
      {/* my interests */}
      <div className="detail-button">
        <h3>Interests</h3>
        <i className="fa fa-users" aria-hidden="true"></i>
      </div>
      {/* my messages */}
      <div className="detail-button">
        <h3>Messages</h3>
        <i className="fa fa-comments" aria-hidden="true"></i>
      </div>
    </div>
  </div>
);

export default Profile;
/*
<hgroup className="header">
  <h3 className="greeting">Hello, {currentUser.username}!</h3>
  <div className="profile-links">
    <Link className="profile-button" to="/myevents">your events</Link>
    <Link className="profile-button" to="/myinterests">your events</Link>
    <Link className="profile-button" to="/profile">your info</Link>
  </div>
</hgroup>
*/
