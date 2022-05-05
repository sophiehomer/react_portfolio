import React from 'react'
import './styles.css'

const Resume = () => {
  return (
  <>
    {/* <div className="pageTitle">RESUME</div> */}
      <h1 className="frontEnd">FRONT-END PROFICIENCIES</h1>
        <ul className="backEndList">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>  
      <h1 className="backEnd">BACK-END PROFICIENCIES</h1>
        <ul className="frontEndList">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>

      <h2 className="downloadResume">Download my resume</h2>      

    </>
  )
}

export default Resume