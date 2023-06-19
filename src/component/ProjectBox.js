import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBox = (props) => {
  return (
    <>
      <div className="projectbox">
        <img src={props.src} alt="" />
        <h3>{props.title}</h3>
        <p>{props.about}</p>
        <Link to={props.href} target='_blank'><button className='submit_btn'>See Live</button></Link>
      </div>
    </>
  )
}

export default ProjectBox