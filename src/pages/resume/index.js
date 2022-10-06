import React, { useEffect } from 'react'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'
import NavProject from '../../components/Navigation_project';

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div>
           <NavProject/>
            <main className="resumePage">
                <p className="workHistory">
                    Work History
                </p>
                <p className="job">
                    Product Design Intern - Strōma Medical
                </p>
                <p className="stromaJobDate">    
                     June 2022 - August 2022
                </p>
                <p className="jobDescription">     
                • Facilitated design discussions with cross-functional teams to gather business and user insights to inform design decisions <br></br>
                • Delivered high-fidelity prototypes
                </p>

                <p className="job">
                Costume Designer - 21st Century Fox
                </p>
                <p className="jobDate">  
                October 2017 - June 2022 
                </p>

                <p className="job">
                Costume Designer - CBS
                </p>
                <p className="jobDate">  
                April 2016 - September 2017
                </p>

                <p className="job">
                Costume Designer - Paramount <br></br>
                </p>
                <p className="jobDate">  
                January 2014 - March 2016
                </p>

                <p className="resumeAppsAndParadigmsTitle">Applications & Paradigms</p>
                <p className="resumeAppsAndParadigms">
                    Figma, Webflow, MVC, RESTful API’s, Object-oriented programming, Git & GitHub
                </p>
                <p className="educationTitle">
                    Education
                </p>
                <p className="education">
                Trilogy, UCLA Extension - Full-Stack Coding Bootcamp
                </p>
                <p className="jobDate">  
                December 2021 - June 2022
                </p>
  
                <p className="resumeSkills">Skills</p>
                <div className="skillsContainer">
                    <div className="resumeDesignSkills">
                        <p className="resumeDesign">Design</p>
                        <p className="fourthSummary">
                            UX Design <br></br>
                            UI Design <br></br>
                            User Research <br></br>
                            Prototyping <br></br>
                            Product Thinking <br></br>
                        </p>
                    </div>
                     <div className="resumeTechnicalSkills">
                        <p className="resumeTechnical">Technical</p>   
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

                    <div className="resumeApplicationsParadigms">
                        <p className="resumeAppsParadigms">Software</p>   
                        <p className="fourthSummary">
                            Figma <br></br>
                            Webflow <br></br>
                            MVC<br></br>
                            RESTful API’s<br></br>
                            Git & GitHub<br></br>
                        </p>
                    </div>

                    {/* <div className="personalSkills">
                        <p className="personal">Personal</p>   
                        <p className="fourthSummary">
                            Collaboration <br></br>
                            Storytelling <br></br>
                            Leadership
                        </p>
                    </div> */}
                </div> 
                <a download href= {Pdf} rel="noreferrer" target="_blank" className="resumeDownload">Download my resume here</a>    
                
            </main>
    </div>
    )
  }

  export default Resume