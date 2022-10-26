import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../components/Courses';
import CoursesList from '../components/CoursesList';

const CoursesPage = () => {
  const courses = useLoaderData();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 py-5 pe-5">
          <h2 className='mb-4'>Our Courses</h2>
          <Courses courses={courses}></Courses>
        </div>
        <div className="col-lg-3 py-5" style={{ backgroundColor: 'rgb(28, 35, 49)' }}>
          <div>
            <CoursesList courses={courses}></CoursesList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;