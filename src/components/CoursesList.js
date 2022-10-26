import React from 'react';
import CourseList from './CourseList';

const CoursesList = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map(course => <CourseList key={course._id} course={course}></CourseList>)}
    </div>
  );
};

export default CoursesList;