import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.detailButton = this.detailButton.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  goTo(to){
    this.props.history.push(to);
  }

  detailButton({ className, title, to }){
    return (
      <div className="detail-button" onClick={() => this.goTo(to)}>
          <h3>{title}</h3>
          <i className={ className } aria-hidden="true"></i>
      </div>
    );
  }

  render(){
    const { currentUser, logout } = this.props;

    return (
      <div id="profile">
        <h1>Hello, {currentUser.username}!</h1>
        <div className='button-container'>
          {
            this.detailButton({
              className: "fa fa-calendar",
              title: "Events",
              to: '/events'
            })
          }

          {
            this.detailButton({
              className: "fa fa-users",
              title: "Interests",
              to: '/interests'
            })
          }

          {
            this.detailButton({
              className: "fa fa-comments",
              title: "Messages",
              to: '/messages'
            })
          }
        </div>
      </div>
  );
  }
}
//
// const Profile = ({ currentUser, logout }) => (
//   <div id="profile">
//     <h1 className="">Hello, {currentUser.username}!</h1>
//     <div className='button-container'>
//
//       <div className="detail-button">
//           <h3>Events</h3>
//           <i className="fa fa-calendar" aria-hidden="true"></i>
//       </div>
//
//       <div className="detail-button">
//         <h3>Interests</h3>
//         <i className="fa fa-users" aria-hidden="true"></i>
//       </div>
//
//       <div className="detail-button">
//         <h3>Messages</h3>
//         <i className="fa fa-comments" aria-hidden="true"></i>
//       </div>
//     </div>
//   </div>
// );

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
