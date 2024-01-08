import React from 'react';
import { useNavigate } from 'react-router-dom';

const EorrorPage = () => {
  const router  = useNavigate();
  return (
    <div className='Error_page'>
      <br /><br /><br /><br /><br /><br />
      <h1>Hey Dear this Page is not available Or Currenty not working</h1>
      <button className='error_btn' onClick={()=>router("/")}>Go Back</button>
    </div>
  )
}

export default EorrorPage
