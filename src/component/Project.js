import React,{useEffect,useState,useRef} from 'react'
import ProjectBox from './ProjectBox';
import roomrent from '../images/roomrent.jpg';
import todolist from '../images/todolist.png';
import resumemaker from '../images/Rmaker.png';
import kbc from '../images/kbc.png';
import weather from '../images/weather.png'
import music from '../images/music.png';
import mern from '../images/mern.png';
import quote from '../images/quote.png';
import joke from "../images/jokes.png";
import search from '../images/Search.png';
import '../../src/App.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
  }, []);
  return (
      <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
      >
          {props.children}
      </div>
  );
}



const Project = () => {
  useEffect(()=>{
    document.title ="Brijes Singh (Project)";
  },[])
  return (
    <>
    <div className='page_start container page_start_project'>
    <h1 style={{textAlign:'center'}} className='about_me'>Project</h1>
    <div className='one_to_one_project_details'>
    <FadeInSection>
      <ProjectBox title="Search Room" src={roomrent} href="https://roomrenter.onrender.com/"  about="Search for rooms for rent in your city using this website. It's easy to find a room from anywhere, at any time."/>
</FadeInSection>
<FadeInSection>
      <ProjectBox title="Todo List" src={todolist} href="https://brijesh2004.github.io/TodoList/"  about="I have created a password-protected todo list using only HTML, CSS, and JavaScript. You can add items to the list with Your Password"/>
      </FadeInSection>
<FadeInSection>
      <ProjectBox title="Resume Maker" src={resumemaker} href="https://brijesh2004.github.io/ResumeMaker/" about="You Can Make Resume With only Filling the Data . You Don't Need to Know the Any Software for This fill the details and download your Resume "/>
</FadeInSection><FadeInSection>
      <ProjectBox title="Weather App" src={weather} href="https://weatherapp-new.onrender.com/" about="This is the Weather App You Can Search the weather of the city that you want to know the weather condition of the city"/>
      </FadeInSection>
<FadeInSection>
      <ProjectBox title="Music App" src={music} href="https://brijesh2004.github.io/MusicApp/" about="This is the Simple Music App Made using the HTML CSS And JAVASCRIPT with the limited of the song"/>
</FadeInSection><FadeInSection>
      <ProjectBox title="MERN Project" src={mern} about="This is the Simple Website Made using the MERN it's content the Signup Login And send message and save it on the data base and also read the data from the data base "/>
      </FadeInSection>
<FadeInSection>
      <ProjectBox title="Quote " src={quote} href="https://brijesh2004.github.io/quote_in_english/" about="This is the Quote App you can read Unlimited number of the Quote This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api"/>
</FadeInSection><FadeInSection>
      <ProjectBox title="jokes" src={joke} href="https://brijesh2004.github.io/jokes/" about="This is the Jokes App you can read Unlimited number of the Jokes This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api"/>
      </FadeInSection>
<FadeInSection>
      <ProjectBox title="Search Images Online" href="https://brijesh2004.github.io/SearchImage/" src={search} about="In this website you can search the online images with the category this is made using html css and javascript and the images search it from the unslaph"/>
</FadeInSection><FadeInSection>
      <ProjectBox title="Kaun Banega KarorPati" href="https://brijesh2004.github.io/Play-KBC/" src={kbc} about="This is the Kaun Banega Karorpati Like q Quiz website this will not provide you any reward this is made only for as a mini project play this only for fun"/>
      </FadeInSection>
    </div>

    </div>
    </>
  )
}

export default Project

