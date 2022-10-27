import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';

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
          <div className='container py-4 myborder'>
            <div className='row'>
              <div className='col-3'>
                <NavLink to='/' className='navbar-brand'>Learn Villa</NavLink>
              </div>
              <div className='col-9 d-flex justify-content-end align-items-center'>
                <div id='dark-mode' className="d-inline form-check form-switch me-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <img src='../images/night-mode.png' width='20px' alt="" />
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
                    <OverlayTrigger
                      key='bottom'
                      placement='bottom'
                      overlay={
                        <Tooltip id={`tooltip-'bottom'`}>{user.displayName}</Tooltip>
                      }
                    >
                      <Link to='/profile'><img src={user?.photoURL ? user.photoURL : '../images/user.png'} width='35px' style={{ borderRadius: '50%' }} alt="" /></Link>
                    </OverlayTrigger>

                    <button
                      onClick={handleUserLogout}
                      className='btn btn-dark btn-sm ms-3'
                    >Logout</button>
                  </div>
                }

                <Navbar.Toggle aria-controls="header-navbar-nav" className='rr-header-toggle' />
              </div>
            </div>

          </div>
          <div style={{ backgroundColor: 'rgb(99, 81, 206)' }}>
            <Navbar.Collapse className='container justify-content-start' id="header-navbar-nav">
              <Nav>
                <NavLink
                  className={({ isActive }) => isActive && location === '/' ? 'nav-link active' : 'nav-link'}
                  to='/'
                >Home</NavLink>
                <NavLink className='nav-link' to='/courses'>Courses</NavLink>
                <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>
                <NavLink className='nav-link' to='/faq'>FAQ</NavLink>
                <NavLink className='nav-link' to='/blog'>Blog</NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </header >
  );
};

export default Header;