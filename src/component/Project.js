import React, { useEffect, useState, useRef } from 'react'
import ProjectBox from './ProjectBox';
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
      useEffect(() => {
            document.title = "Brijes Singh (Project)";
      }, [])
      return (
            <>
                  <div className='page_start container page_start_project'>
                        <h1 style={{ textAlign: 'center' }} className='about_me'>Project</h1>
                        <div className='one_to_one_project_details'>
                              <FadeInSection>
                                    <ProjectBox title="Search Room" href1="https://github.com/brijesh2004/roomrenderfrontend" href="https://roomrenter.onrender.com/" about="Search for rooms for rent in your city using this website. It's easy to find a room from anywhere, at any time." tech={["React", "NodeJS", "ExpressJS", "MongoDB", "CSS"]} />
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="MMMUT Notes And Papers" href1="https://github.com/brijesh2004/next-js-app" href="https://imaginative-lebkuchen-087686.netlify.app/" about="Upload and Download the All semester papers and Notes that help the other Technology Used Next.js" tech={["Next.js", "MongoDB", "CSS"]} />
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="Restorent Management" href1="https://github.com/brijesh2004/ResoManagemnetclient" href="https://restoclient.onrender.com" about="Order the food Online home delivery also available. Pay On Delivery Technology Used MERN Stack" tech={["React", "NodeJS", "ExpressJS", "MongoDB", "CSS"]} />
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="Task Management" href1="https://github.com/brijesh2004/TaskManagementclient" href="https://task-management-system-6ar7.onrender.com" about="Add the Task Delete the Task Update the Task change state of the task according to State of the Task" tech={["React", "NodeJS", "ExpressJS", "MongoDB", "CSS"]} />
                              </FadeInSection>


                              <FadeInSection>
                                    <ProjectBox title="Todo List" href1="https://github.com/brijesh2004/TodoList" href="https://brijesh2004.github.io/TodoList/" about="I have created a password-protected todo list using only HTML, CSS, and JavaScript. You can add items to the list with Your Password" tech={["HTML", "CSS", "JAVASCRIPT"]} />
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="Resume Maker" href1="https://github.com/brijesh2004/ResumeMaker" href="https://brijesh2004.github.io/ResumeMaker/" about="You Can Make Resume With only Filling the Data . You Don't Need to Know the Any Software for This fill the details and download your Resume " tech={["HTML", "CSS", "JAVASCRIPT"]} />
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="Weather App" href1="https://github.com/brijesh2004/WeatherappBackend" href="https://weatherapp-new.onrender.com/" about="This is the Weather App You Can Search the weather of the city that you want to know the weather condition of the city" tech={["HTML", "CSS", "JAVASCRIPT", "Nodejs" , "handelbars"]}/>
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="Music App" href1="https://github.com/brijesh2004/MusicApp" href="https://brijesh2004.github.io/MusicApp/" about="This is the Simple Music App Made using the HTML CSS And JAVASCRIPT with the limited of the song" tech={["HTML", "CSS", "JAVASCRIPT"]}/>
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="MERN Project" about="This is the Simple Website Made using the MERN it's content the Signup Login And send message and save it on the data base and also read the data from the data base " />
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="Github Search Users" href1="https://github.com/brijesh2004/Search_github_user" href="https://search-github-username1.netlify.app/" about="Search the users on the github by there starting username and views there profile and repo and many more "  tech={["REACT", "CSS"]}/>
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="Text utils" href1="https://github.com/brijesh2004/TextUtils" href="https://textutils-00qy.onrender.com" about="Remove the Extra space , Uppercase , lowercase , clear text copy text basic react app"  tech={["REACT", "CSS"]}/>
                              </FadeInSection>
                             
                              <FadeInSection>
                                    <ProjectBox title="Covid 19 Report" href1="https://github.com/brijesh2004/Covid19Data" href="https://covid19-data12.netlify.app/" about="Check the active case recovered case death state wise and overall updated date "  tech={["REACT", "CSS"]}/>
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="E-commerce website" href1="https://github.com/brijesh2004/E-commerce-website" href="https://brijesh2004.github.io/E-commerce-website/" about="E-commerce webssite frontend only "  tech={["HTML", "CSS" ,"JAVASCRIPT"]}/>
                              </FadeInSection>

                              <FadeInSection>
                                    <ProjectBox title="Quote" href1="https://github.com/brijesh2004/quote_in_english" href="https://brijesh2004.github.io/quote_in_english/" about="This is the Quote App you can read Unlimited number of the Quote This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api" tech={["HTML", "CSS", "JAVASCRIPT"]}/>
                              </FadeInSection><FadeInSection>
                                    <ProjectBox title="jokes" href1="https://github.com/brijesh2004/jokes" href="https://brijesh2004.github.io/jokes/" about="This is the Jokes App you can read Unlimited number of the Jokes This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api" tech={["HTML", "CSS", "JAVASCRIPT"]}/>
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="Search Images Online" href1="https://github.com/brijesh2004/SearchImage" href="https://brijesh2004.github.io/SearchImage/" about="In this website you can search the online images with the category this is made using html css and javascript and the images search it from the unslaph" tech={["HTML", "CSS", "JAVASCRIPT"]} />
                              </FadeInSection>
                              <FadeInSection>
                                    <ProjectBox title="Kaun Banega KarorPati" href1="https://github.com/brijesh2004/Play-KBC" href="https://brijesh2004.github.io/Play-KBC/" about="This is the Kaun Banega Karorpati Like q Quiz website this will not provide you any reward this is made only for as a mini project play this only for fun"  tech={["HTML", "CSS", "JAVASCRIPT"]}/>
                              </FadeInSection>
                        </div>

                  </div>
            </>
      )
}

export default Project

