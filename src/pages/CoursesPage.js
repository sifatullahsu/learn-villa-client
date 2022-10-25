import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../components/Courses';

const CoursesPage = () => {
  const courses = useLoaderData();

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-9">
          <Courses courses={courses}></Courses>
        </div>
        <div className="col-lg-3 bg-info">col-3</div>
      </div>
    </div>
  );
};

export default CoursesPage;