import React, { useEffect, useState } from 'react'
import '../../src/App.css';
import './ski.css';
import { Link } from 'react-router-dom';




const Project = () => {
      const [tech, setTech] = useState(0);
      useEffect(() => {
            document.title = "Brijes Singh (Project)";
      }, [])
      return (
            <>
                  <div className='skill_page'>
                        <div onClick={() => setTech(0)} className={tech === 0 ? 'selected' : ''}>Full Stack</div>
                        <div onClick={() => setTech(1)} className={tech === 1 ? 'selected' : ''}>Frontend</div>
                        <div onClick={() => setTech(2)} className={tech === 2 ? 'selected' : ''}>Blockchain</div>
                        <div onClick={() => setTech(3)} className={tech === 3 ? 'selected' : ''}>Machine Learning</div>
                  </div>

                  {tech === 0 && 
                  <div className='all_project'>
                        <ProjectDetails title="Room Renter" details="Search for rooms for rent in your city using this website. It's easy to find a room from anywhere, at any time."
                              code="https://github.com/brijesh2004/roomrenderfrontend"
                              live="https://roomrenter.onrender.com"
                        />
                        <ProjectDetails title="MMMUT Notes And Papers" details="Upload and Download the All semester papers and Notes that help the other Technology Used Next.js"
                              code="https://github.com/brijesh2004/next-js-app"
                              live="https://mmmutmedia.netlify.app/"
                        />
                        <ProjectDetails title="Restorent Management" details="Order the food Online home delivery also available. Pay On Delivery Technology Used MERN Stack"
                              code="https://github.com/brijesh2004/ResoManagemnetclient"
                              live="https://restoclient.onrender.com"
                        />
                        <ProjectDetails title="Task Management" details="Add the Task Delete the Task Update the Task change state of the task according to State of the Task"
                              code="https://github.com/brijesh2004/TaskManagementclient"
                              live="https://task-management-system-6ar7.onrender.com"
                        />
                        <ProjectDetails title="Series and Movies" details="See the Series and Moview with the Review. It uses API to find the Movies and Series Data"
                              code="https://github.com/brijesh2004/NextjsWebsite"
                              live="https://nextjs-website-brijesh2004.vercel.app/"
                        />
                        <ProjectDetails title="Get Weather" details="Find the Weather with the City Name along with the Day and Date"
                              code="https://github.com/brijesh2004/WeatherappBackend"
                              live="https://weatherapp-new.onrender.com"
                        />
                        <ProjectDetails title="Techi Support" details="Educational Website the Find Project and Concept video and a Single platform "
                              code="https://github.com/brijesh2004/Techisupport1"
                              live="https://techi-support.onrender.com/"
                        />
                  </div>}

                  {tech === 1 && 
                  <div className='all_project'>
                        <ProjectDetails title="Covid19 Live Report" details="See the Current live update about the Covid19 cases (Active case, Recovered Case, Deaths case , Total Active Cases"
                              code="https://github.com/brijesh2004/Covid19Data"
                              live="https://covid19-data12.netlify.app"
                        />
                        <ProjectDetails title="Todo List" details="Add Todo with Password without using any database and localhost, Delete Todo with the same password. Only using HTML CSS and JavaScript"
                              code="https://github.com/brijesh2004/TodoList"
                              live="https://brijesh2004.github.io/TodoList/"
                        />
                        <ProjectDetails title="Read jokes" details="This is the Jokes App you can read Unlimited number of the Jokes This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api"
                              code="https://github.com/brijesh2004/jokes"
                              live="https://brijesh2004.github.io/jokes/"
                        />
                        <ProjectDetails title="Search Images Online" details="In this website you can search the online images with the category this is made using html css and javascript and the images search it from the unslaph"
                              code="https://github.com/brijesh2004/SearchImage"
                              live="https://brijesh2004.github.io/SearchImage"
                        />
                        <ProjectDetails title="Github Search Users" details="Search the users on the github by there starting username and views there profile and repo and many more"
                              code="https://github.com/brijesh2004/Search_github_user"
                              live="https://search-github-username1.netlify.app"
                        />
                        <ProjectDetails title="Music App" details="This is the Simple Music App Made using the HTML CSS And JAVASCRIPT with the limited of the song"
                              code="https://github.com/brijesh2004/MusicApp"
                              live="https://brijesh2004.github.io/MusicApp"
                        />
                  </div>}

                  {tech === 2 && 
                  <div className='all_project'>
                       <h1 style={{color:'white'}}>Comming Soon</h1> 
                  </div>}

                  {tech === 3&& 
                  <div className='all_project'>
                       <h1 style={{color:'white'}}>Comming Soon</h1> 
                  </div>}

                 
            </>
      )
}


const ProjectDetails = ({ title, details, code, live }) => {
      return (
            <div className='project_details'>
                  <div>
                        <h3>{title}</h3>
                        <p className='details'>{details}</p>
                        <hr /> <br />
                        <div className='live_btn'>
                              <button><Link to={code} target='_blank'>Code</Link></button>
                              <button><Link to={live} target='_blank'>Live</Link></button>
                        </div>
                  </div>
            </div>
      )
}

export default Project

