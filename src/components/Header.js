import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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

      <Navbar bg="light" expand="lg">
        <div className='container flex-column align-items-baseline'>
          <div>
            <NavLink to='/' className='navbar-brand'>Learn Villa</NavLink>
            <Navbar.Toggle aria-controls="header-navbar-nav" />
          </div>
          <div>
            <Navbar.Collapse id="header-navbar-nav">
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
                  <button className='btn btn-dark' onClick={handleUserLogout}>Logout</button>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;