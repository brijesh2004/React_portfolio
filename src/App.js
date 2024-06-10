import React from 'react';

import Navbar from './component/Navbar';

import About from './component/About';



function App() {
  return (
<>
<div className='parent_page' id="about">
   <Navbar/>
     <About/>
   </div>
  </>
  );
}

export default App;
