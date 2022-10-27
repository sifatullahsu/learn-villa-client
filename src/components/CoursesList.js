import React from 'react';
import CourseList from './CourseList';

const CoursesList = ({ courses }) => {

  return (
    <div>
      {courses.map(course => <CourseList key={course._id} course={course}></CourseList>)}
    </div>
  );
};

export default CoursesList;