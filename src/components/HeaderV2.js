import React from 'react';
import { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';

const HeaderV2 = () => {
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
    <>
      <header className='v2'>
        <div className="container">
          <nav className='navbar navbar-expand-lg'>
            <Link to='/' className="navbar-brand">
              <img src="../images/logo.png" alt="" />
            </Link>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='/'
                    className={({ isActive }) => isActive && location === '/' ? 'nav-link active' : 'nav-link'}
                  >Home</NavLink>
                </li>
                <li className="nav-item"><NavLink className='nav-link' to='/courses'>Courses</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to='/profile'>Profile</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to='/checkout'>Checkout</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to='/faq'>FAQ</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to='/blog'>Blog</NavLink></li>
              </ul>
            </div>

            <div>
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
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderV2;