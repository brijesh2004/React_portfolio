import React, { useEffect , useState , useRef} from 'react';
import './ski.css';
import html from '../skillsimages/html.png';
import css from '../skillsimages/css.png';
import javascript from '../skillsimages/JavaScript.png';
import bootstap from '../skillsimages/bootstrap.png';
import react from '../skillsimages/react.png';
import node from '../skillsimages/node.png';
import express from '../skillsimages/express-js.png';
import mongo from '../skillsimages/mongodb.png';
import next from '../skillsimages/next_logo.png';
import c from '../skillsimages/c.png';
import cpp from '../skillsimages/cpp.png';
import python from '../skillsimages/python.png';
import typescript from '../skillsimages/typescript.png';
import redux from '../skillsimages/redux.png';





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





const Skills = () => {
  useEffect(() => {
    document.title = "Brijes Singh (Skills)";
  }, []);

  return (
    <div className='skills_page_Start'>
      <div className='pskill'>
     <FadeInSection>
     <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'> <img className='skillimg' src={html} alt="html" /></div>
        </div>
     </FadeInSection>
        
        <FadeInSection>
        <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'><img className='skillimg' src={css} alt="css" /></div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={javascript} alt="javascript" />
          </div>
        </div>
        </FadeInSection>
       <FadeInSection>
       <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={bootstap} alt="bootstrap" />
          </div>
        </div>
       </FadeInSection>
        <FadeInSection>
        <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={react} alt="React" />
          </div>
        </div>
        </FadeInSection>
        
       <FadeInSection>
       <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>

          <img className='skillimg' src={node} alt="Node" />
          </div>
        </div>
       </FadeInSection>

       <FadeInSection>
       <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={express} alt="express" />
          </div>
        </div>
       </FadeInSection>
       <FadeInSection>
       <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>

          <img className='skillimg' src={mongo} alt="mongoDB" />
          </div>
        </div>
       </FadeInSection>
       <FadeInSection>
       <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>

          <img className='skillimg' src={c} alt="c Language" />
          </div>
        </div>
       </FadeInSection>
        
        <FadeInSection>
        <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={cpp} alt="cpp" />
          </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className='left-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={python} alt="python" />
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={next} alt="Next js" />
          </div>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={typescript} alt="Next js" />
          </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className='right-skills'>
          <div className='vertical_line'></div>
          <div className='horizontal_line'></div>
          <div className='skillcircle'>
          <img className='skillimg' src={redux} alt="Next js" />
          </div>
        </div>
        </FadeInSection>
       
       
       
       
      </div>
    </div>
  );
}

export default Skills;
