import React, { useEffect } from 'react'
import SkillCircle from './SkillCircle';
const Skills = () => {
  useEffect(() => {
    document.title = "Brijes Singh (Skills)";
  }, [])
  return (
    <>
      <div className='page_start container page_start_skills'>
        <div className='pskill'>
        <SkillCircle val="80" title="HTML"/>
        <SkillCircle val="70" title="CSS"/>
        <SkillCircle val="55" title="JAVASCRIPT"/>
        <SkillCircle val="70" title="BOOTSTRAP"/>
        <SkillCircle val="50" title="REACTJS"/>
        <SkillCircle val="50" title="NODEJS"/>
        <SkillCircle val="50" title="EXPRESSJS"/>
        <SkillCircle val="40" title="MONGODB"/>
        <SkillCircle val="70" title="C LANGUAGE"/>
        <SkillCircle val="75" title="C++"/>
        <SkillCircle val="30" title="PYTHON"/>
        <SkillCircle val="20" title="JAVA"/>
        <SkillCircle val="70" title="CSS"/>
        </div>
      </div>
    </>
  )
}

export default Skills