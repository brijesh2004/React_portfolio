import React ,{useEffect , useState} from 'react';
import './ski.css'
import highSchool from '../images/highschool.png';
import graduation from '../images/mmmut.png'
import playSound from '../clicked/PlaySound';
const Education = () => {
  const [education , setEducation] = useState(0);
  useEffect(()=>{
    document.title ="Brijes Singh (Education)";
  },[])
  return (
    <div className='skill_main_page'>
      <div className='skill_page'>
      
     <div onClick={()=>setEducation(0)} className={education===0?'selected':''} onMouseLeave={playSound}>High School</div>
     <div onClick={()=>setEducation(1)} className={education===1?'selected':''} onMouseLeave={playSound}>Intermediate</div>
     <div onClick={()=>setEducation(2)} className={education===2?'selected':''} onMouseLeave={playSound}>Graduation</div>
    </div>

    {
      education===0&&<From title="High School" college="From Aadarsh Inter College Hardi Chack Gorakhpur" 
        per="With An Average Percentage of 83.3%" img={highSchool}
      />
    }
    {
      education===1&&<From title="Intermediate" college="From Gov. Jubilee Inter College Gorakhpur"
        per="With An Average Percentage of 68.6%" img={highSchool}
      />
    }
    {
      education===2&&<From title="Graduation" college="From Madan Mohan Malaviya University of Technology Gorakhpur"
        img={graduation}
      />
    }
    </div>
  )
}



const From = ({title , college , per , img})=>{
  return(
    <div>
     <div className='eduaction_details'>
          <div><p className='degree_name'>{title}</p> 
          <p>{college}</p>
          <p>{per}</p>
           </div>
          <img src={img} alt="" />
         </div>
    </div>
  )
}







export default Education