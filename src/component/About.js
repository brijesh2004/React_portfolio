import React,{useEffect} from 'react';
import hero from '../images/hero.jpg';
const About = () => {
  useEffect(()=>{
    document.title ="Brijes Singh";
  },[])
  return (
    <>
      <div className='page_start page_start_about container'>
      <h1 className='about_me'>About Me</h1>
        <img src={hero} alt="brijesh_pic" className='hero_img' />
        <div className='about_content'>
        <h1>Hi I Am Brijesh Singh</h1>
         <p> A MERN Developer</p>
         
         <p> I Am Pursuing My B-Tech Degree From Madan Mohan Malviya University Of Technology Gorakhpur Uttar Pradesh(2025)</p>

        <p>  I Am A Quick Learner ,Coding Enthusiast And Also A Competative Programmer Doing Competative Programming In CPP .</p>

       <p>  5 ⭐ In C++ On Hackerrank 4 ⭐  In C On Hackerrank 5 ⭐ In Problem Solving And 3 ⭐ On Codechef (Max-Rating - 1615 ). I Have Secured 144 Rank In CodeChef Long Chalange That Is Conduct In December 2022 . I Have Solved 400+ Question On Gfg And 300+ On Coding Ninjas And 100+ On Leetcode.</p> 
       <p>My name is Brijesh Singh, and my skills include proficiency in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, C/C++, Python, and Java. I have completed over 400 questions on GeeksforGeeks, 100 questions on LeetCode, and 300+ coding challenges on Coding Ninjas.</p>
       <p>I am passionate about programming and dedicated to continuous learning and staying up-to-date with the latest technologies. In addition to my technical abilities, I am also a strong communicator and collaborator, able to work effectively in teams and communicate ideas clearly and effectively.</p>
       <p>Overall, I believe my extensive skills and experience in programming, dedication to continuous learning, and collaborative nature make me a valuable asset to any team or project that requires high-quality programming work</p>
        </div>
      </div>
    </>
  )
}

export default About