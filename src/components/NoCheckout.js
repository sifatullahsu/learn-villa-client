import React from 'react';
import { Link } from 'react-router-dom';

const NoCheckout = () => {
  return (
    <div className='container py-5'>
      <img src='../images/empty-cart.png' width='80px' alt="" />
      <div>
        <h5 className="">Your cart is empty.</h5>
        <p className="card-text">Please select any course to procced checkout.</p>
        <Link to="/courses" className="btn btn-primary">Visit Courses</Link>
      </div>
    </div>
  );
};

export default NoCheckout;