import React from 'react'
import './styles.css'

const Resume = () => {
  return (
  <>
    {/* <div className="frontEndDiv"> */}
      <h1 className="frontEnd">FRONT-END PROFICIENCIES</h1>
        <ul className="frontEndList">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li> 
          <li>jQuery</li>
          <li>React</li> 
          <li>Responsive Design</li>
          <li>Bootstrap</li>
        </ul> 
      {/* </div>  */}
    {/* <div className="backEndDiv"> */}
      <h2 className="backEnd">BACK-END PROFICIENCIES</h2>
          <ul className="backEndList">
          <li>APIs</li>
          <li>Node</li>
          <li>MySQL</li> 
          <li>Sequelize </li>
          <li>MongoDB </li> 
          <li> Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
    {/* </div>   */}
        
      <a href= "assets/documents/sophie-homer-resume.pdf" download>
      <h3 className="downloadResume">DOWNLOAD MY RESUME</h3>     
      </a>

    </>
  )
}

export default Resume