import React,{useEffect} from 'react';
import instagram from '../images/instagram.png';
import Facebook from '../images/Facebook.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedIn.png';

const Contact = () => {
  useEffect(()=>{
    document.title ="Brijes Singh (Contact)";
  },[])
  return (
    <>
    <div className='page_start container page_start_contact'>
   <h1 className='contact_me'>Contact Me</h1> 
     <form className='contact_form'>
      <input type="text" placeholder='Name' className='inp' /> <br />
      <input type="text"  placeholder='Email' className='inp'/> <br />
      <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea> <br />
      <input type="button" value="Submit" className='submit_btn'/>
     </form>
   <br /><br /><br /><br /><br />

    <h1>Connect with me</h1>
     <div>
    
    <a href="https://www.instagram.com/brijeshsingh5744/" rel='noreferrer' target={"_blank"}> <img src={instagram} alt="" className='social_links_img' /></a>
    <a href="https://www.linkedin.com/in/brijesh-singh-456185228/" rel='noreferrer' target={"_blank"}> <img src={linkedIn} alt="" className="social_links_img" /></a>
    <a href="https://www.facebook.com/profile.php?id=100087485439951" rel='noreferrer' target={"_blank"}> <img src={Facebook} alt="" className="social_links_img" /></a>
    <a href="https://github.com/brijesh2004" rel='noreferrer' target={"_blank"}> <img src={github} alt="" className="social_links_img" /></a>
   
  </div>
    </div>
      
    </>
  )
}

export default Contact