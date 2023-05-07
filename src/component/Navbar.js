import React from 'react';


const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-dark  fixed-top nav_background">
  <div className="container-fluid">
    <a className="navbar-brand my_name" href="/" ><span className='first_name'> <span className='first_char'>B</span>rijesh</span> <span className='last_name'><span className='last_char'>S</span>ingh</span></a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white "></span>
    </button>
    <div className="collapse navbar-collapse  text-white" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  text-white">
          <a className="nav-link text-white" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/about">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="/contact">Contact me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;