import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
  return (
    <div className='course-list bg-white mb-3 p-2 rounded'>
      <div className="row gx-2">
        <div className="col-5">
          <img src={course.picture} className='img-fluid h-100' alt="" />
        </div>
        <div className="col-7">
          <p className='mb-0'>{course.name}</p>
          <Link to={`courses/${course._id}`} className=''>View</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseList;