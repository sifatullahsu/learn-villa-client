import React, { useContext, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GitHubSignIn from './GitHubSignIn';
import GoogleSignIn from './GoogleSignIn';

const Login = () => {

  const { userLogin, userPasswordResetEmail } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleUserLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(res => {
        toast.success('Successfully logged in!!');
        navigate(from, { replace: true });
      })
      .catch(err => {
        toast.error(err.message);
      })
  }

  const handleForgetPassword = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    userPasswordResetEmail(email)
      .then(res => {
        toast.success('Reset email sent. Check your email.');
        handleClose();
      })
      .catch(err => {
        toast.error(err.message);
      })
  }

  return (
    <div className='form-section'>
      <div className="form-inner myborder">
        <h3 className='base-color'>Account Login</h3>
        <Form onSubmit={handleUserLogin}>

          <Form.Group className="form-group form-box clearfix" controlId="login-email">
            <Form.Control name="email" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix" controlId="login-password">
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-theme">Login</button>
          </div>
        </Form>

        <p onClick={handleShow} className="float-start forgot-password mb-3">Forgot your password?</p>

        <div className="extra-login form-group clearfix">
          <span>Or</span>
        </div>

        <ul className="social-list clearfix">
          <li className="google-bg"><GoogleSignIn from={from}></GoogleSignIn></li>
          <li className="github-bg"><GitHubSignIn from={from}></GitHubSignIn></li>
        </ul>

        <div>Don't have an account? <Link to="/register" className="thembo"> Register here</Link></div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title className='mb-4'>Forgot password</Modal.Title>
            <Form onSubmit={handleForgetPassword}>
              <Form.Group className="form-group form-box clearfix" controlId="forget-email">
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-sm btn-theme mt-3">Reset Password</button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Login;