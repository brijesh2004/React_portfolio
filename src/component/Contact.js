import React,{useEffect} from 'react'

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
    
    <a href="https://www.instagram.com/brijeshsingh5744/" rel='noreferrer' target={"_blank"}> <img src="https://clipart.info/images/ccovers/1516920567instagram-png-logo-transparent.png" alt="" className='social_links_img' /></a>
    <a href="https://www.linkedin.com/in/brijesh-singh-456185228/" rel='noreferrer' target={"_blank"}> <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt="" className="social_links_img" /></a>
    <a href="https://www.facebook.com/profile.php?id=100087485439951" rel='noreferrer' target={"_blank"}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_(2019).svg/1200px-Facebook_f_logo_(2019).svg.png" alt="" className="social_links_img" /></a>
    <a href="https://github.com/brijesh2004" rel='noreferrer' target={"_blank"}> <img src="https://th.bing.com/th/id/R.c963626c145ea660ba7ceee666789c0a?rik=Ui79F6V0E%2bmFYw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fGithub-PNG-Image.png&ehk=SFNlTltedev2eggRq1KzxVrr35NixG8ITlAbFT%2bVMoY%3d&risl=&pid=ImgRaw&r=0" alt="" className="social_links_img" /></a>
   
  </div>
    </div>
      
    </>
  )
}

export default Contact
