import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from '../components/Courses';
import OurPartner from '../components/OurPartner';

const HomePage = () => {
  const courses = useLoaderData();

  return (
    <div>
      <section className='hero-section text-white' >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className='mb-3'>Take The First Step To <br /> <span>Knowledge With Us</span></h1>
              <div>
                <Link to='/courses' className='btn btn-primary mt-4'>Explore Courses</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5 mx-auto" style={{ maxWidth: '980px' }}>
          <div className="row">
            <div className="col-12">
              <h3 className='mb-4'>Our Courses</h3>
              <Courses key={courses._id} courses={courses}></Courses>
            </div>
          </div>
        </div>
      </section>

      <OurPartner></OurPartner>
    </div>
  );
};

export default HomePage;

/* style={{
backgroundImage: "url(./images/cover-photo.jpg)"
}} */