import React from 'react';
import { Link } from 'react-router-dom';

const AlreadyLoggedIn = () => {
  return (
    <div>
      <img src='../images/correct.png' width='80px' alt="" />
      <div>
        <h5 className="">You already logged in</h5>
        <p className="card-text">You have already logged into the application. </p>
        <Link to="/profile" className="btn btn-primary">Visit Profile</Link>
      </div>
    </div>
  );
};

export default AlreadyLoggedIn;