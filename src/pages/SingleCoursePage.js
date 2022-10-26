import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const SingleCoursePage = () => {

  const course = useLoaderData();
  const { _id, name, picture, price, short_description, description } = course;

  return (
    <div className='container py-5'>
      <div className='position-relative'>
        <div className='btn-download'><button className='btn btn-primary'><FaDownload></FaDownload></button></div>
        <img src={picture} alt="" />
        <h3 className='my-3'>{name}</h3>
        <p>{short_description}</p>
        <p className='fw-bold'>Price: ${price}</p>
        <div>
          <p>{description}</p>
        </div>
        <Link to={`/checkout/${_id}`} className='btn btn-primary'>Get premium access</Link>
      </div>
    </div>
  );
};

export default SingleCoursePage;