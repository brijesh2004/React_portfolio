import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import instagram from '../images/instagram.png';
import Facebook from '../images/Facebook.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedIn.png';
import hackerrank from '../images/hakerrank.png';
import codechef from '../images/Codechef.png';
import leetcode from '../images/LeetCode.png';
import gfg from '../images/gfglogo.png';
import coding_ninjas from '../images/coding_ninjas.png';

const Contact = () => {
   const [name , setName] = useState("");
   const [email , setEmail] = useState("");
   const [message , setMessage] = useState("");

   const storeTheMessage = async (e) =>{
    e.preventDefault();
    const res = await fetch('https://portfoliobackend-59j6.onrender.com/addmessage',{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name ,email, message 
      })
    })
    const data = await res.json();
    if(res.status===401 || !data || res.status===500){
      window.alert("Message Not Added");
     }
     else{
      window.alert(" Message Added Successfully");
      console.log("Message Added Successfully");
      setEmail('');
      setMessage('');
      setName('');
     }
   }

   const handleInputs = (event)=>{
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
    else if( name === 'name'){
      setName(value);
    }
   }




  useEffect(()=>{
    document.title ="Brijes Singh (Contact)";
  },[])
  return (
    <>
    <div className='page_start container page_start_contact'>
    <h1 className='contact_me'>Coding Profiles</h1>
   <div className="programming_profile">
   <div className='coding_profile_box'>
   <a href="hr"><img src={hackerrank} alt="hackerrank" /> </a>
   <p>HackerRank</p>
   <Link to="anf"><button className='coding_profile_button'>Visit</button></Link>
   </div>
   <div className='coding_profile_box'>
   <a href="hr"><img src={codechef} alt="codechef" /> </a>
   <p>CodeChef</p>
   <Link to="anf"><button className='coding_profile_button'>Visit</button></Link>
   </div>
   <div className='coding_profile_box'>
   <a href="hr"><img src={leetcode} alt="leetcode" /> </a>
   <p>Leetcode</p>
   <Link to="anf"><button className='coding_profile_button'>Visit</button></Link>
   </div>
   <div className='coding_profile_box'>
   <a href="hr"><img src={gfg} alt="gfg" /> </a>
   <p>Geeksforgeek</p>
   <Link to="anf"><button className='coding_profile_button'>Visit</button></Link>
   </div>
   <div className='coding_profile_box'>
   <a href="hr"><img src={coding_ninjas} alt="coding_ninjas" /> </a>
   <p>Coding Ninjas</p>
   <Link to="anf"><button className='coding_profile_button'>Visit</button></Link>
   </div>
   </div>
     


   <h1 className='contact_me'>Message Me</h1> 
     <form className='contact_form'>
      <input type="text" placeholder='Name' className='inp' name='name' onChange={handleInputs} value={name} autoComplete='off'/> <br />
      <input type="email"  placeholder='Email' className='inp' name='email' onChange={handleInputs} value={email} autoComplete='off'/> <br />
      <textarea name="message" id="" cols="30" rows="10" placeholder='message' onChange={handleInputs} value={message} autoComplete='off'></textarea> <br />
      <input type="button" value="Submit" className='submit_btn' onClick={storeTheMessage}/>
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