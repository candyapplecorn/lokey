import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <span>Find low key activities near you.<br/>
      Meet with others that share your interests.</span>
    <Link to="/sign-up">Join the Community</Link>
    </div>
  );
};

export default Home;
