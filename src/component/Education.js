import React ,{useEffect} from 'react'

const Education = () => {
  useEffect(()=>{
    document.title ="Brijes Singh (Education)";
  },[])
  return (
    <>
    <div className='page_start container '>
         <div className='eduaction_details'>
          <div><p className='degree_name'>High School</p> 
          <p>From Aadarsh Inter College Hardi Chack Gorakhpur</p>
          <p>With An Average Percentage of 83.3%</p>
           </div>
          <img src="https://schools.chekrs.com/wp-content/uploads/sites/2/2017/12/up-board-logo.png" alt="" />
         </div>
         <div className='eduaction_details'>
          <img src="https://schools.chekrs.com/wp-content/uploads/sites/2/2017/12/up-board-logo.png" alt="" />
          <div><p className='degree_name'>Intermediate School</p> 
          <p>From Gov. Jubilee Inter College Gorakhpur</p>
          <p>With An Average Percentage of 68.6%</p></div>
         </div>
         <div className='eduaction_details'>
          <div> <p className='degree_name'>Graduation</p> 
          <p>From Madan Mohan Malaviya University of Technology Gorakhpur</p>
          </div>
          <img src="https://th.bing.com/th/id/R.39605ab406910a0a2e2a5f72a2e44588?rik=H84EeBOm075kYQ&riu=http%3a%2f%2froboticsclub.mmmut.ac.in%2frc%2fMMM+Logo.png&ehk=uAhFAY9wsN2dQmdNpNOtmvMhZAvgK0ydAA6XfJPJrUw%3d&risl=&pid=ImgRaw&r=0" alt="" />
         </div>
      </div>
    </>
  )
}

export default Education
