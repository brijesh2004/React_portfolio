import React, { useEffect } from 'react'
import Skillbox from './Skillbox';
const Skills = () => {
  useEffect(() => {
    document.title = "Brijes Singh (Skills)";
  }, [])
  return (
    <>
      <div className='page_start container page_start_skills'>
        <div className='pskill'>
        <Skillbox SkillName="HTML" value='80' color="red"/>
        <Skillbox SkillName="CSS" value='75'/>
        <Skillbox SkillName="JAVASCRIPT" value='50'/>
        <Skillbox SkillName="BOOTSTAP" value='70'/>
        <Skillbox SkillName="RACT JS" value='55'/>
        <Skillbox SkillName="NODE JS" value='35'/>
        <Skillbox SkillName="EXPRESS JS" value='40'/>
        <Skillbox SkillName="MONGODB" value='30'/>
        <Skillbox SkillName="C LANGUAGE" value='50'/>
        <Skillbox SkillName="C++" value='55'/>
        <Skillbox SkillName="JAVA" value='20'/>
        <Skillbox SkillName="PYTHON" value='40'/>
        </div>
      </div>
    </>
  )
}

export default Skills
