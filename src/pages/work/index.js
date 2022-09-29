import React, { useEffect } from 'react'
// import Portfolio from '../../components/Portfolio'
import NavProject from '../../components/Navigation_project';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div>
           <NavProject/>
        <main className='moreAboutMeContainer'>
        <p className="first"> Why web design?</p>
        <p className="firstSummary"> 
          I enjoy developing a story around a line of products or services and using web design as a vehicle to tell that story in a way that emotionally touches the consumer.  
          I appreciate the fast pace at which web design evolves and I value work that allows me to draw on multiple creative solutions around a single project.
        </p>
        <p className="second"> What sets me apart?</p>
        <p className="secondSummary">
          I spent several years in costume design and have a strong background in software development. This combination affords me a unique and effective skillset for web design.  
        </p>
        <p className="secondSummary">
          Costume design demands a broad and deep familiarity with the history and principles of design. It also requires strong research skills for character development, historical accuracy, and audience tastes and preferences.
        </p>
        <p className="secondSummary">
          As a software developer, I’m able to code an application from start to finish. I’m dedicated to detail and a practical and creative problem solver. I’m also fluent in the language of engineers and developers, which allows me to translate effectively among technical, content, and administrative teams and ensure that expectations are met or exceeded.
        </p>
        <p className="third">What am I looking for in a company?</p>
        <p className="thirdSummary">
          I hope to find a company that affords me the opportunity to learn from and grow with others, to solve problems collaboratively, to add value, and to generate innovative design of which I can be proud.
        </p>
        <p className="fourth">Skills</p>
        <div className="skillsContainer">
          <div className="designSkills">
            <p className="design">Design</p>
            <p className="fourthSummary">
              UX Design <br></br>
              UI Design <br></br>
              User Research <br></br>
              Prototyping <br></br>
              Product Thinking <br></br>
            </p>
          </div>
          <div className="technicalSkills">
            <p className="technical">Technical</p>   
            <p className="fourthSummary">
              HTML <br></br>
              CSS <br></br>
              Javascript <br></br>
              React <br></br>
              Node <br></br>
              Express <br></br>
              MySQL <br></br>
              MongoDB <br></br>
            </p>
          </div>

          <div className="applicationsParadigms">
          <p className="appsParadigms">Software</p>   
          <p className="fourthSummary">
            Figma <br></br>
            Webflow <br></br>
            MVC<br></br>
            RESTful API’s<br></br>
            Object-oriented <br></br> programming<br></br>
            Git & GitHub<br></br>
          </p>
          </div>

          <div className="personalSkills">
            <p className="personal">Personal</p>   
            <p className="fourthSummary">
              Collaboration <br></br>
              Storytelling <br></br>
              Leadership
            </p>
          </div>
        </div>
      </main>  
    </div>
    )
  }

  export default About





