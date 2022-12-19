import React, { useContext } from 'react';
import AlreadyLoggedIn from '../components/AlreadyLoggedIn';
import Register from '../components/Register';
import { AuthContext } from '../contexts/AuthContextComp';

const RegisterPage = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div className='container py-5'>
        <div className="row">
          <AlreadyLoggedIn></AlreadyLoggedIn>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="login-14">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Register></Register>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;