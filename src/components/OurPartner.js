import React from 'react';
import { Link } from 'react-router-dom';

const OurPartner = () => {
  return (
    <section className='our-partner'>
      <div className="container py-5 mx-auto">
        <div className="row">
          <div className="col-lg-5">
            <p className='mytext'>OUR PARTNERS</p>
            <h2 className='mb-4'>Learn with Our Partners</h2>
            <p className='mytext'>Get Your Quality Skills Certificate Through LearnVilla. Stay with us for the better future.</p>
            <Link to='/courses' className='btn btn-primary mt-4'>Explore Courses</Link>
          </div>
          <div className="col-lg-7">
            <div className='partner-img mt-5 mt-lg-0'>
              <img src="../images/brand-01.png" alt="" />
              <img src="../images/brand-02.png" alt="" />
              <img src="../images/brand-03.png" alt="" />
              <img src="../images/brand-04.png" alt="" />
              <img src="../images/brand-05.png" alt="" />
              <img src="../images/brand-06.png" alt="" />
              <img src="../images/brand-07.png" alt="" />
              <img src="../images/brand-08.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;