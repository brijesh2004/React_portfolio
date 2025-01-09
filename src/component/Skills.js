import React, { useState} from 'react';
import './ski.css';
import WebSkill from './WebSkill';
import BlockchainSkill from './BlockchainSkill';
import MLSKills from './MLSKills';
import playSound from '../clicked/PlaySound';



const Skills = () => {
  const [skill , setSkill] = useState(0);

  // const playSound = ()=>{
  //   const audio = new Audio(clicked);
  //   audio.play();
  // }

  return (
    <div className='skill_main_page'>
     <div className='skill_page'>
    <div onClick={()=>setSkill(0)} className={skill===0?'selected':''} onMouseLeave={playSound}>Web Development</div>
    <div onClick={()=>setSkill(1)} className={skill===1?'selected':''} onMouseLeave={playSound}>Blockchain</div>
    <div onClick={()=>setSkill(2)} className={skill===2?'selected':''} onMouseLeave={playSound}>Machine Learning</div>
    <div onClick={()=>setSkill(3)} className={skill===3?'selected':''} onMouseLeave={playSound}>Language</div>
    </div>
     {
      skill===0&&<div>
        <WebSkill/>
      </div>
     }
     {
      skill===1&&<div>
        <BlockchainSkill/>
      </div>
     }
     {
      skill===2&&<div>
        <MLSKills/>
      </div>
     }
     {
      skill===3&&<div>
        <Language/>
      </div>
     }
    </div>
  );
}


const Language = ()=>{
  return(
    <div>
      <div className='web_skills'>
        <div>C Language</div>
        <div>C++</div>
        <div>Python</div>
        <div>JavaScript</div>
        <div>Solidity</div>
        <div>Java</div>
      </div>
    </div>
  )
}



export default Skills;
