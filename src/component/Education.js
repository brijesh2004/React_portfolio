import React ,{useEffect} from 'react';
import highschool from '../images/highschool.png';
import mmmut from '../images/mmmut.png';
import Arrow from '../images/down_arrow.png'
import Frad from './Frad';

const Education = () => {
  useEffect(()=>{
    document.title ="Brijes Singh (Education)";
  },[])
  return (
    <>
    <div className='page_start container '>
    <h1 className='about_me'>Education</h1>
      <Frad>
      <div className='eduaction_details'>
          <div><p className='degree_name'>High School</p> 
          <p>From Aadarsh Inter College Hardi Chack Gorakhpur</p>
          <p>With An Average Percentage of 83.3%</p>
           </div>
          <img src={highschool} alt="" />
         </div>
      </Frad>
        <Frad>
         <div className='arrow_div'>
          <img src={Arrow} alt="" srcset="" className='arrow_img' />
         </div>
        </Frad>
        <Frad>

         <div className='eduaction_details'>
          <img src={highschool} alt="" />
          <div><p className='degree_name'>Intermediate School</p> 
          <p>From Gov. Jubilee Inter College Gorakhpur</p>
          <p>With An Average Percentage of 68.6%</p></div>
         </div>
        </Frad>

        <Frad>
         <div className='arrow_div'>
          <img src={Arrow} alt="" srcset="" className='arrow_img' />
         </div>
        </Frad>

        <Frad>

         <div className='eduaction_details'>
          <div> <p className='degree_name'>Graduation</p> 
          <p>From Madan Mohan Malaviya University of Technology Gorakhpur</p>
          </div>
          <img src={mmmut} alt="" />
         </div>
        </Frad>
      </div>
    </>
  )
}

export default Education