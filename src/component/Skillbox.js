import React from 'react'

const Skillbox = (props) => {
  return (
    <>
     <div className="skillss">
        <div className='skill_name'>{props.SkillName}</div> <progress id="file" value={props.value} max="100" className='Progressbar'> 32% </progress> 
    </div>
    </>
  )
}

export default Skillbox