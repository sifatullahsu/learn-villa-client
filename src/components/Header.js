import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation().pathname;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to='/' className='navbar-brand'>Learn Villa</NavLink>
        <Navbar.Toggle aria-controls="header-navbar-nav" />
        <Navbar.Collapse id="header-navbar-nav" className='justify-content-end'>
          <Nav>
            <NavLink
              className={({ isActive }) =>
                isActive && location === '/' ? 'nav-link active' : 'nav-link'
              }
              to='/' >Home</NavLink>
            <NavLink className='nav-link' to='/courses'>Courses</NavLink>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
            <NavLink className='nav-link' to='/register'>Register</NavLink>
            <NavLink className='nav-link' to='/profile'>Profile</NavLink>
            <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;