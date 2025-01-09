import React , {useRef, useState} from 'react';

import Navbar from './component/Navbar';

import About from './component/About';



function App() {

  const [isTop, setIsTop] = useState(true);
  const circleRef = useRef(null);
  
  const MouseMove = (e) => {
    setTimeout(() => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    }, 200);
  };
  const handleScroll = (event) => {
    const element = event.target; 
    if (element.scrollTop === 0) {
      setIsTop(true); 
    } else {
      setIsTop(false);
    }
  };
  return (
<>
<div className='parent_page' id="about" onScroll={handleScroll}  onMouseMove={MouseMove}>
   {/* <h1>Hello Brijesh Singh</h1> */}
     <Navbar isTop={isTop}/>
     <div id='circle' ref={circleRef}></div>
     <About/>
   </div>
  </>
  );
}

export default App;
