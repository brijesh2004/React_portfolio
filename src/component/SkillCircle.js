import React from 'react'
import './ski.css';

const SkillCircle = (props) => {
  return (
    <>
    <div className='skillscircularbar'>
    <div>
       <div role="progressbar"  aria-valuemin="0" aria-valuemax="100" style={{"--value":props.val}} className='percentage_value'></div>
       <h6 style={{color:'white'}}>{props.title}</h6>
       </div>
    </div>
   
    
   
    </>
  )
}

export default SkillCircle
