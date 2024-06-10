import React from 'react';
import instagram from '../images/instagram.png';
import Facebook from '../images/Facebook.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedIn.png';


const Contact = () => {
  return (
    <>
      <div className='page_start_contact'>
        <div>

          <a href="https://www.instagram.com/brij_esh_singh/" rel='noreferrer' target={"_blank"}> <img src={instagram} alt="" className='social_links_img' /></a>
          <a href="https://www.linkedin.com/in/brijesh-singh-456185228/" rel='noreferrer' target={"_blank"}> <img src={linkedIn} alt="" className="social_links_img" /></a>
          <a href="https://www.facebook.com/profile.php?id=61556647203428" rel='noreferrer' target={"_blank"}> <img src={Facebook} alt="" className="social_links_img" /></a>
          <a href="https://github.com/brijesh2004" rel='noreferrer' target={"_blank"}> <img src={github} alt="" className="social_links_img" /></a>

        </div>
      </div>

    </>
  )
}

export default Contact