import React from 'react'
import './styles.css'

const Resume = () => {
  return (
  <>
    {/* <div className="pageTitle">RESUME</div> */}
      <h1 className="frontEnd">FRONT-END PROFICIENCIES</h1>
        <p className="frontEndList">
          HTML CSS JavaScript jQuery React Responsive Design Bootstrap
        </p>  
      <h2 className="backEnd">BACK-END PROFICIENCIES</h2>
        <p className="backEndList">
        APIs Node Express MySQL Sequelize MongoDB Mongoose REST GraphQL
        </p>
      <h3 className="downloadResume">DOWNLOAD MY RESUME</h3>     
    </>
  )
}

export default Resume