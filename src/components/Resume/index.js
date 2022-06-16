import React from 'react'
import './styles.css'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'

const Resume = () => {
  return (
  <>
   <h1 className="resumeTitle">Proficiencies</h1>
    <div className="resumeList" id="resumeList">
    
       <div className="proficiencyList">
          Figma<br></br>
          HTML<br></br>
          CSS<br></br>
          Responsive Design<br></br>
       </div>   
       <div className="proficiencyList">
          JavaScript <br></br> 
          React <br></br>
          Node<br></br>
          jQuery<br></br>
        </div>
        <div className="proficiencyList">
          MySQL <br></br>
          Sequelize <br></br>
          MongoDB  <br></br>
          Mongoose<br></br>
        </div>  
        <div className="proficiencyList">
          GraphQL<br></br>
          APIs<br></br>
          REST<br></br>
      </div>
    </div>  
    <div className="downloadResumeDiv">
      <a download href= {Pdf} rel="noreferrer" target="_blank" className="downloadResume">Download my resume</a>
    </div>
    </>
  )
}

export default Resume;