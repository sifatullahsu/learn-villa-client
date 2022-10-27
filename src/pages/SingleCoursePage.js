import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import Error from '../components/Error';


const ref = React.createRef();

const SingleCoursePage = () => {

  const course = useLoaderData();
  const { _id, name, picture, price, short_description, description } = course;

  if (!_id) {
    return (
      <Error></Error>
    );
  }

  return (
    <div className='container py-5' ref={ref}>
      <div className='position-relative'>
        <div className='btn-download'>
          <Pdf targetRef={ref} filename={`${name}.pdf`}>
            {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary'><FaDownload></FaDownload></button>}
          </Pdf>
        </div>
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