import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className='hero-section text-white' >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className='mb-3'>Take The First Step To <br /> <span>Knowledge With Us</span></h1>
              <div>
                <Link to='/courses' className='btn btn-light mt-4'>Explore Courses</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

/* style={{
backgroundImage: "url(./images/cover-photo.jpg)"
}} */