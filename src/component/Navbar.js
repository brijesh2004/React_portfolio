import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

const Navbar = () => {
  const [ulClass, setUlClass] = useState("nav_ul");
   
  const toggle = () => {
    setUlClass(ulClass === "nav_ul" ? "nav_ul_clicked" : "nav_ul");
  };

  useEffect(() => {
    const handleResize = () => {
      // Reset the class if window width is greater than 800px
      if (window.innerWidth > 800) {
        setUlClass("nav_ul");
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='nav_head'>
      <nav className='nav_bar_nav'>
        <div>
          <ul className={ulClass}>
            <li> <a href="/" className='nav_a'>Home</a></li>
            <li><a href="/education" className='nav_a'>Education</a></li>
            <li><a href="/project" className='nav_a'>Project</a></li>
            <li><a href="/contact" className='nav_a'>Contact</a></li>
          </ul>
        </div>
        <div className='nav_toggle'>
         
          <button class="toggle_btn" onClick={toggle} className="icon"><i class="fa fa-bars"></i></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
