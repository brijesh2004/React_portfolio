import React from 'react';
// import './App.css';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import About from './component/About';
import Education from './component/Education';
import Contact from './component/Contact';

import Project from './component/Project';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import EorrorPage from './component/EorrorPage';
// import Nav from './component/Nav';

function App() {
  return (
<>
<div className='parent_page'>

<Router>
<Navbar/>
    <Routes>
          <Route exact path='/' element={<About/>}></Route>
          <Route exact path='/about' element={<Skills/>}></Route>
          <Route exact path='/education' element={<Education/>}></Route>
          <Route exact path='/project' element={<Project/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='*' element={<EorrorPage/>}></Route>
   </Routes>
   </Router>
   </div>
  </>
  );
}

export default App;
