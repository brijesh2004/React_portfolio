import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark  fixed-top nav_background">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand my_name">
            <span className='first_name'>
              <span className='first_char'>B</span>rijesh
            </span>
            <span className='last_name'>
              <span className='last_char'>S</span>ingh
            </span>
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white "></span>
          </button>
          <div className="collapse navbar-collapse  text-white" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" className="nav-link  text-white">Skills</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/education' ? 'active' : ''}`}>
                <Link to="/education" className="nav-link  text-white">Education</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/project' ? 'active' : ''}`}>
                <Link to="/project" className="nav-link  text-white">Project</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link  text-white">Contact me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
