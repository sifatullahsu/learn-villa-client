import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  return (
    <div className="col course">
      <div className="card">
        <img src={course.picture} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6">{course.name}</h5>
          <p className="card-text">{course.short_description}</p>
          <Link to={`/courses/${course._id}`} className='btn btn-primary btn-sm'>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Course;