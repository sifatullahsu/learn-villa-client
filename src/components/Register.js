import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GitHubSignIn from './GitHubSignIn';
import GoogleSignIn from './GoogleSignIn';

const Register = () => {

  const { userRegister, updateUserDisplayName } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const handleUserRegister = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    userRegister(email, password)
      .then(res => {
        updateUserDisplayName(name);
        form.reset();
        toast.success('Successfully logged in!!');
        navigate(from);
      })
      .catch(err => {
        toast.error('Something is wrong!!');
      })
  }

  return (
    <div className='form-section'>
      <div className="form-inner">
        <h3>Account Register</h3>
        <Form onSubmit={handleUserRegister}>

          <Form.Group className="form-group form-box clearfix" controlId="register-name">
            <Form.Control name="name" type="text" placeholder="Full name" required />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix" controlId="register-email">
            <Form.Control name="email" type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix" controlId="register-password">
            <Form.Control name="password" type="password" placeholder="Password" required />
          </Form.Group>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-theme">Register</button>
          </div>

        </Form>

        <div className="extra-login form-group clearfix">
          <span>Or</span>
        </div>

        <ul className="social-list clearfix">
          <li className="google-bg"><GoogleSignIn from={from}></GoogleSignIn></li>
          <li className="github-bg"><GitHubSignIn from={from}></GitHubSignIn></li>
        </ul>

        <div>Have an account? <Link to="/login" className="thembo"> Login here</Link></div>
      </div>
    </div>
  );
};

export default Register;