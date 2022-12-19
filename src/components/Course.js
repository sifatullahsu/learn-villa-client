import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  return (
    <div className="col course">
      <div className="card rounded-0">
        <img src={course.picture} className="card-img-top img-fluid rounded-0 p-3 pb-0" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6 fw-bold text-truncate">{course.name}</h5>
          <p className="card-text text-muted crop-text-2">{course.short_description}</p>
          <div className='d-flex justify-content-between align-items-end pt-3'>
            <p className='fw-bold mb-0'>Price: ${course.price}</p>
            <Link to={`/courses/${course._id}`} className='btn btn-primary btn-sm'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;