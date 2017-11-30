import React from 'react';
import { withRouter } from 'react-router-dom';

const Interests = (props) => {

  const scrollToForm = () => (document.getElementById("form").scrollIntoView());

  return(
    <div>
      <a onClick={scrollToForm}>Add New Interests</a>
      <div>List goes here</div>
      <div id="form">Form goes here</div>
    </div>
  );
};

export default withRouter(Interests);
