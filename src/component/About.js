import React,{useEffect} from 'react';

import Typed from 'react-typed';
// import hero from '../images/hero.jpg';
import hero1 from '../images/hero3.jpeg';
import Skills from './Skills';
import Education from './Education';
import Project from './Project';
import CodingProfile from './CodingProfile';
import ContactForm from './ContactForm';
import Contact from './Contact';
import Achievment from './Achievment';


const About = () => {
  useEffect(()=>{
    document.title ="Brijes Singh";
  },[])
  return (
    <>
      <div className='page_start page_start_about container'>
      <br /><br /><br /><br />
      <h1 className='about_me' id="about">About Me</h1>

      <div className='about_main'>
       <div className='image_part_div'>
        <img src={hero1} alt="brijesh_pic" className='hero_img' />
      </div>
        <div className='about_content'>
        <h2>Brijesh Singh</h2>
        <h1>Hi I Am  <Typed
        className="typing"
        strings={['Brijesh Singh ','C and C++ Programmer', 'MERN Stack Developer', 'Competitive Coder', 'React Native Developer']}
        typeSpeed={100}
        backSpeed={60}
        loop={true}
      /></h1>
         <p>MERN Developer, React Native , Full Stack Developer</p>
        
         {/* <p> I Am Pursuing My B-Tech Degree From Madan Mohan Malviya University Of Technology Gorakhpur Uttar Pradesh(2025)</p>

        <p>  I Am A Quick Learner ,Coding Enthusiast And Also A Competative Programmer Doing Competative Programming In CPP .</p>

       <p>  5 ⭐ In C++ On Hackerrank 4 ⭐  In C On Hackerrank 5 ⭐ In Problem Solving And 3 ⭐ On Codechef (Max-Rating - 1615 ). I Have Secured 144 Rank In CodeChef Long Chalange That Is Conduct In December 2022 . I Have Solved 400+ Question On Gfg And 300+ On Coding Ninjas And 100+ On Leetcode.</p> */}
        <p>My name is Brijesh Singh, and my skills include proficiency in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, C/C++, Python, React Native , Next Js , TypeScript and Java. I have completed over 700 questions on GeeksforGeeks, 300 questions on LeetCode, and other pltform like CodeChef , Codeforces and Code360.</p> 
        <p>I am passionate about programming and dedicated to continuous learning and staying up-to-date with the latest technologies. In addition to my technical abilities, I am also a strong communicator and collaborator, able to work effectively in teams and communicate ideas clearly and effectively.</p>
        <p>Overall, I believe my extensive skills and experience in programming, dedication to continuous learning, and collaborative nature make me a valuable asset to any team or project that requires high-quality programming work</p>
        </div>
        </div>
      </div>
      <h1 className='about_me' id="skill">Skills</h1>
      <Skills/>
      <h1 className='about_me' style={{marginTop:'90px'}} id="education">Education</h1> 
      <Education/>
      <h1 className='about_me' style={{marginTop:'90px'}} id="project">Project</h1> 
      <Project/>
      <h1 className='about_me' style={{marginTop:'90px'}} id='coding_profile'>Coding Profile</h1>
      <CodingProfile/>
      <h1 className='about_me' style={{marginTop:'90px', marginBottom:'50px'}}>1st Rank in Syntax Sieze and Algo Olympics</h1>
      <Achievment/>
      <h1 className='about_me' style={{marginTop:'90px', marginBottom:'50px'}} id="contact">Contact me</h1>
      <ContactForm/>
      <h1 className='about_me' style={{marginTop:'90px', marginBottom:'50px'}}>Connect</h1>
      <Contact/>
      <p  style={{color:'white' ,marginTop:'90px', marginBottom:'50px', textAlign:'center'}}>All Right Reserved</p>
    </>
  )
}

export default About