import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GitHubSignIn from './GitHubSignIn';
import GoogleSignIn from './GoogleSignIn';

const Register = () => {
  return (
    <div className='form-section'>
      <div className="form-inner">
        <h3>Account Register</h3>
        <Form>

          <Form.Group className="form-group form-box clearfix" controlId="register-name">
            <Form.Control name="name" type="text" placeholder="Full name" />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix" controlId="register-email">
            <Form.Control name="email" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix" controlId="register-password">
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-theme">Register</button>
          </div>

        </Form>

        <div className="extra-login form-group clearfix">
          <span>Or</span>
        </div>

        <ul className="social-list clearfix">
          <li className="google-bg"><GoogleSignIn></GoogleSignIn></li>
          <li className="github-bg"><GitHubSignIn></GitHubSignIn></li>
        </ul>

        <div>Have an account? <Link to="/login" className="thembo"> Login here</Link></div>
      </div>
    </div>
  );
};

export default Register;