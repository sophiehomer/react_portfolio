import React from 'react'
import NavProject from '../../components/Navigation_project';

const Kit = () => {
  return (
    <>
    <NavProject/>
    <h1 id="projectTitle" className="projectTitle">KIT</h1>
    <div className="kitPage">
        
        <section className="kitSummaryContainer">
          <p className="kitSummary">
            A social application developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class.                     
          </p>
          <section className="gitHubWebsiteContainer">
            <div className="githubAndWebsite">
              <a href="https://drawtheline2022.herokuapp.com/"  rel="noreferrer" target="_blank">
                <button className="website">
                  VIEW APP
                </button>
              </a>
              <p className="gitHub"> 
                <a href="https://github.com/sophiehomer/kit" className='gitHubLink'  rel="noreferrer" target="_blank">GitHub</a> 
              </p>
            </div>
          </section>
          <section className="kitRoleAndTechnology">
            <div>
              <p className="myRole">
                MY ROLE
              </p>
              <p className="kitRole">
                Front-end developer <br></br> UX/UI
              </p>
            </div>
            <div>
              <p className="kitTechnology">
                BUILT WITH
                <p className="figma">
                  React <br></br>
                  JavaScript <br></br>
                  Node.js <br></br>
                  Apollo <br></br>
                  Mongoose <br></br>
                  mongoDb <br></br>
                  Bycrypt
                </p>
              </p>
            </div>
          </section>
        </section>
    </div>
    </>
  
  )
}

export default Kit