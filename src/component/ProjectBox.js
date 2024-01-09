import React from 'react';
import { Link } from 'react-router-dom';
import '../style/project.css';

const ProjectBox = (props) => {
  const techused = props.tech;
  return (
    <>
      <div className="projectbox">
      {
        console.log(props.tech)
      }
        {/* <img src={props.src} alt="" /> */}
        <h3>{props.title}</h3>
        <p>{props.about}</p>
        <h4>Technology Used</h4>
         {
          Array.isArray(props.tech)&&techused.map((elem , ind)=>{
          return <button key={ind} className='tech_btn'>{elem}</button>
          })
         }
         <br />
        <Link to={props.href1} target='_blank'><button className='see_code_btn'>Code</button></Link>
        <Link to={props.href} target='_blank'><button className='see_live_btn'>Live</button></Link>
        
      </div>
    </>
  )
}

export default ProjectBox