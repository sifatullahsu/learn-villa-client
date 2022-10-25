import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCoursePage = () => {

  const course = useLoaderData();
  const { _id, name, picture, short_description, description } = course;

  return (
    <div className='container py-5'>
      <div>
        <img src={picture} alt="" />
        <h1>{name}</h1>
        <p>{short_description}</p>
        <div>
          <p>{description}</p>
        </div>
        <button className='btn btn-primary'>Download</button>
        <button className='btn btn-primary mx-4'>Checkout</button>
      </div>
    </div>
  );
};

export default SingleCoursePage;