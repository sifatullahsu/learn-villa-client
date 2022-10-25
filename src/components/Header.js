import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {

  const { user, userLogout } = useContext(AuthContext);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleUserLogout = () => {
    userLogout()
      .then(res => {
        toast.success('Logout Successful!!');
        navigate('/');
      })
      .catch(err => { })
  }

  return (
    <header>
      <Navbar expand="lg">
        <div className='flex-column align-items-baseline'>
          <div className='container py-4'>
            <div className='row'>
              <div className='col-md-3'>
                <NavLink to='/' className='navbar-brand'>Learn Villa</NavLink>
                <Navbar.Toggle aria-controls="header-navbar-nav" />
              </div>
              <div className='col-md-9 text-end'>
                <div id='dark-mode' className="d-inline form-check form-switch mx-4">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <img src='./images/night-mode.png' width='20px' alt="" />
                </div>
                {
                  !user &&
                  <div className='btn-group'>
                    <NavLink className='btn btn-base btn-sm' to='/login'>Login</NavLink>
                    <NavLink className='btn btn-base btn-sm' to='/register'>Register</NavLink>
                  </div>
                }
                {
                  user &&
                  <div className='d-inline'>
                    <FaUserCircle></FaUserCircle>
                    <span>
                      <span>{user?.displayName}</span>
                      <button onClick={handleUserLogout}>Logout</button>
                    </span>
                  </div>
                }
              </div>
            </div>

          </div>
          <div style={{ backgroundColor: 'rgb(99, 81, 206)' }}>
            <Navbar.Collapse className='container justify-content-center' id="header-navbar-nav">
              <Nav>
                <NavLink
                  className={({ isActive }) => isActive && location === '/' ? 'nav-link active' : 'nav-link'}
                  to='/'
                >Home</NavLink>
                <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
                <NavLink className='nav-link' to='/register'>Register</NavLink>
                <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>
                <NavLink className='nav-link' to='/faq'>FAQ</NavLink>
                <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                {
                  user &&
                  <button className='btn btn-dark' onClick={handleUserLogout}><FaSignOutAlt></FaSignOutAlt></button>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </header >
  );
};

export default Header;