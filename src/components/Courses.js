import React from 'react';
import Course from './Course';

const Courses = ({ courses }) => {

  return (
    <div className='courses'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          courses.map(course => <Course key={course._id} course={course}></Course>)
        }
      </div>

    </div>
  );
};

export default Courses;