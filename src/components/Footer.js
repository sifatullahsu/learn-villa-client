import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaHome, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="" style={{ backgroundColor: '#1c2331' }}>
        <div className="text-center text-lg-start text-white">
          <section className="d-flex flex-column flex-md-row justify-content-between p-4" style={{ backgroundColor: '#6351ce' }} >
            <div>
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="https://www.facebook.com/sifatullahhh" target="_blank" rel="noreferrer" className="text-white me-4">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://github.com/sifatullahsu" target="_blank" rel="noreferrer" className="text-white me-4">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/sifatullahsu" target="_blank" rel="noreferrer" className="text-white me-4">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company Details</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <h4>Learn Villa</h4>
                  <p>Easy learning management system for productive students.</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p><Link to="/" className="text-white">Home</Link></p>
                  <p><Link to="/faq" className="text-white">FAQ</Link></p>
                  <p><Link to="/blog" className="text-white">Blog</Link></p>
                  <p><Link to="/courses" className="text-white">Courses</Link></p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p><Link to="/login" className="text-white">Login</Link></p>
                  <p><Link to="/register" className="text-white">Register</Link></p>
                  <p><Link to="/profile" className="text-white">Profile</Link></p>
                  <p><Link to="/checkout" className="text-white">Checkout</Link></p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p><FaHome></FaHome> Ashulia, Dhaka, 1341 Bangladesh</p>
                  <p><FaEnvelope></FaEnvelope> personal.sifat@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            Developed By &nbsp;
            <Link className="text-white" to="https://www.sifatullahsu.com/"
            >SIFAT ULLAH</Link>
          </div>
        </div>

      </footer >
    </>
  );
};

export default Footer;