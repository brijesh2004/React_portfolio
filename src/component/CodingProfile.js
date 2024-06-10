import React from 'react';
import { Link } from 'react-router-dom';



const Coding=({platform , img , profile})=>{
    return(
        <>
           <div className='coding_profile_box'>
            <h2 style={{color:'white'}}>{platform}</h2>
            <Link to={profile} target='_blank'><button className='coding_profile_button'>Visit</button></Link>
          </div> 
        </>
    )
}

const CodingProfile = () => {
  return (
    <div> 
      <div className="programming_profile">
          <Coding platform="GeeksforGeeks"  profile="https://auth.geeksforgeeks.org/user/brskumar0102"/>
          <Coding platform="LeetCode"  profile="https://leetcode.com/brijesh_2004/"/>
          <Coding platform="HackerRank"  profile="https://www.hackerrank.com/profile/brskumar0102"/>
          <Coding platform="CodeChef"  profile="https://www.codechef.com/users/brijesh_122004"/>
          <Coding platform="Coding Ninjas" profile="https://www.codingninjas.com/studio/profile/Brijesh_94ec"/>
          <Coding platform="CodeForce"  profile="https://codeforces.com/profile/brijesh_singh"/>
        </div>

    </div>
  )
}

export default CodingProfile
