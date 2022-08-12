import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai'


const Kit = () => {
  return (
    <>
    <h1>KIT</h1>
    <div className="kitPage">
        
        <section className="summaryContainer">
          <p>
          An application developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class.                     
          </p>
        </section>

        <div className="websiteButtonContainer">
          <a href="https://www.figma.com/proto/sa327Zy6gLR6vb7wJH3fb1/Femme-Dept.?page-id=0%3A1&node-id=38%3A3576&viewport=363%2C242%2C0.02&scaling=scale-down&starting-point-node-id=38%3A3576"  rel="noreferrer" target="_blank">
            <button className="website">
              VIEW APP
            </button>
          </a>
        </div>

        <section className="loom">
        <p className="technologiesUsed">
            Built with React, JavaScript, Node.js, Apollo, Mongoose, mongoDb, Bycrypt.
          </p>
          <p className="summary">
            An application developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class.                     
          </p>
          <div className="githubAndWebsiteIcon">
            <p className="openWebsite">
              <a href="https://drawtheline2022.herokuapp.com/"  className='gitHubLinkRight' rel="noreferrer" target="_blank">Application<AiOutlineArrowRight className="arrow" size={20}/></a>
            </p>
            <p className="openGithub"> 
              <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'  rel="noreferrer" target="_blank">GitHub <FaGithub size={22} className="githubLink"/></a> 
            </p>
        </div>

        </section>
    </div>
    </>
  
  )
}

export default Kit