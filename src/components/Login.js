import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GitHubSignIn from './GitHubSignIn';
import GoogleSignIn from './GoogleSignIn';

const Login = () => {

  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const handleUserLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(res => {
        toast.success('Successfully logged in!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
        navigate(from);
      })
      .catch(err => {
        toast.error('Something is wrong!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  return (
    <div className='form-section'>
      <div className="form-inner">
        <h3>Account Login</h3>
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

        <Link
          to="/forgot-password"
          className="float-start forgot-password mb-3"
        >Forgot your password?</Link>

        <div className="extra-login form-group clearfix">
          <span>Or</span>
        </div>

        <ul className="social-list clearfix">
          <li className="google-bg"><GoogleSignIn></GoogleSignIn></li>
          <li className="github-bg"><GitHubSignIn></GitHubSignIn></li>
        </ul>

        <div>Don't have an account? <Link to="/register" className="thembo"> Register here</Link></div>
      </div>
    </div>
  );
};

export default Login;