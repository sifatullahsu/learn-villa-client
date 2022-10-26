import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';

const CheckoutPage = () => {

  const course = useLoaderData();
  const { _id, name, picture, price, short_description } = course;
  const { user } = useContext(AuthContext);

  const handleCheckout = event => {
    event.preventDefault();

    toast.success('You have successfully purchased');
    toast.warn('Cart Functionality Will Be Update On Database Part');
  }


  return (
    <div className='container py-5'>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className='text-center mb-4'>Checkout Course</h2>
        <div className='form-section'>
          <h5>Billing Details</h5>
          <Form onSubmit={handleCheckout}>
            <Form.Group className="form-group form-box clearfix" controlId="checkout-name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="name" value={user.displayName} readOnly />
              <Form.Text className="text-muted">
                This is readonly field.
              </Form.Text>
            </Form.Group>

            <Form.Group className="form-group form-box clearfix" controlId="checkout-email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email" value={user.email} readOnly />
              <Form.Text className="text-muted">
                This is readonly field.
              </Form.Text>
            </Form.Group>

            <h5>Course Details</h5>

            <img src={picture} width='150px' style={{ marginBottom: '20px' }} alt="" />

            <div>
              <Form.Check
                type='radio'
                name='course'
                id={_id}
                label={name}
                defaultChecked
              />
            </div>
            <p>{short_description}</p>
            <p>Price: ${price}</p>


            <div style={{ margin: '45px 0' }}>
              <h5>Payment Type</h5>
              <Form.Check
                type='radio'
                id='payment-type'
                label='Manual Payment'
                defaultChecked
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg btn-theme">Checkout Now</button>
            </div>
          </Form>
        </div>
      </div>
    </div >
  );
};

export default CheckoutPage;