import React from 'react';

const ProjectBox = (props) => {
  return (
    <>
      <div className="projectbox">
        <img src={props.src} alt="" />
        <h3>{props.title}</h3>
        <p>{props.about}</p>
        <a href={props.hred}><button className='submit_btn'>See Live</button></a>
      </div>
    </>
  )
}

export default ProjectBox