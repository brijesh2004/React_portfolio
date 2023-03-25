import React,{useEffect} from 'react'
import ProjectBox from './ProjectBox';

const Project = () => {
  useEffect(()=>{
    document.title ="Brijes Singh (Project)";
  },[])
  return (
    <>
    <div className='page_start container page_start_project'>
    <h1 style={{textAlign:'center'}}>Project</h1>
    <div className='one_to_one_project_details'>
      <ProjectBox title="Search Room" src="https://th.bing.com/th/id/OIP.kdDJpNShCyfrDS6Lly59SgHaEK?pid=ImgDet&rs=1" about="Search for rooms for rent in your city using this website. It's easy to find a room from anywhere, at any time."/>
      <ProjectBox title="Todo List" src="https://th.bing.com/th/id/R.6dffd49b9b21c72f529e3f076d147464?rik=b2v7zFPv8BUaZA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fto-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png&ehk=%2f%2fJUZ%2fij5yJIw9XJ2oyR3jbzP%2bK8u8YwNodX%2f6zrSeU%3d&risl=&pid=ImgRaw&r=0" about="I have created a password-protected todo list using only HTML, CSS, and JavaScript. You can add items to the list with Your Password"/>
      <ProjectBox title="Resume Maker" src="https://th.bing.com/th/id/R.c903d4ce9f89f25eaf51f45617680672?rik=juiwp8v0XCQC6g&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fResume-PNG-Transparent-Image.png&ehk=VIq%2fQElzfZrWsPgaT%2fTesS71d2DIoWFd%2bKJo%2f6ikHfo%3d&risl=&pid=ImgRaw&r=0" about="You Can Make Resume With only Filling the Data . You Don't Need to Know the Any Software for This fill the details and download your Resume "/>
      <ProjectBox title="Weather App" src="https://images-na.ssl-images-amazon.com/images/I/81ryPtRhnnL.png" about="This is the Weather App You Can Search the weather of the city that you want to know the weather condition of the city"/>
      <ProjectBox title="Music App" src="https://th.bing.com/th/id/R.43c4d01f4615e8e846c0f570294a9d79?rik=xptNttIAyYaD0A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f01%2fcool-itunes-icon_85926.png&ehk=hNyYHM4rTQs2Tliy2jAPa572lajqULExk0OgfCFANwY%3d&risl=&pid=ImgRaw&r=0" about="This is the Simple Music App Made using the HTML CSS And JAVASCRIPT with the limited of the song"/>
      <ProjectBox title="MERN Project" src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-Best-for-Developing-Web-Apps.png" about="This is the Simple Website Made using the MERN it's content the Signup Login And send message and save it on the data base and also read the data from the data base "/>
      <ProjectBox title="Quote " src="https://i.pinimg.com/originals/fa/f6/98/faf6988c3c25fb6b55842168034a4542.png" about="This is the Quote App you can read Unlimited number of the Quote This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api"/>
      <ProjectBox title="jokes" src="https://i.pinimg.com/originals/cc/e2/6f/cce26f7edcd7557b64f8a1d389195f55.png" about="This is the Jokes App you can read Unlimited number of the Jokes This is made using HTML CSS And JAVASCRIPT and it use the API to fetch the data from the api"/>
      <ProjectBox title="Search Images Online" src="https://www.pngall.com/wp-content/uploads/8/Search-PNG-High-Quality-Image.png" about="In this website you can search the online images with the category this is made using html css and javascript and the images search it from the unslaph"/>
      <ProjectBox title="Kaun Banega KarorPati" src="https://th.bing.com/th/id/R.008b46f8beb4f637b4e7731613177398?rik=1Ews0OhpsqHW2g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Y99_5Hn-2zI%2fTrj-mUP2_6I%2fAAAAAAAANWA%2fkq7Y5BuJ8AM%2fs1600%2fKBC.png&ehk=gosL20cEFy%2b6PgQdh1I5rxyubxYkzU5ROzhB%2fKzV8CU%3d&risl=&pid=ImgRaw&r=0" about="This is the Kaun Banega Karorpati Like q Quiz website this will not provide you any reward this is made only for as a mini project play this only for fun"/>
   
    </div>

    </div>
    </>
  )
}

export default Project


