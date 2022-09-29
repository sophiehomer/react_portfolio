import React, { useEffect } from 'react'
import NavProject from '../../components/Navigation_project';
import kit from '../../../src/assets/kit/kit.webp'

const Kit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <NavProject/>
    <div className="kitPage">
        <section className="kitSummaryContainer">
          <p className="projectTitle">KIT</p>
          <p className="kitSummary">
            A social application developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class. Please note this application takes a few moments to load. <br></br>       
            <p className="kitUsernameAndPassword">*Requires a username and password to enter. <br></br>
            username: sophiehomer94@gmail.com <br></br>
            password: 12345</p>      
          </p>
          <section className="kitRoleAndTechnology">
            <div>
              <p className="myRole">
                My Role
              </p>
              <p className="kitRole">
                Front-end developer <br></br> UX/UI
              </p>
            </div>
            <div>
              <p className="kitTechnology">
                Built With
                <p className="figma">
                  CSS <br></br>
                  React <br></br>
                  JavaScript <br></br>
                  Node.js <br></br>
                  Apollo <br></br>
                  Mongoose <br></br>
                  MongoDb <br></br>
                  Bycrypt
                </p>
              </p>
            </div>
          </section>
        </section>


        <section className="gitHubWebsiteContainer">
        <section className="kitImageSection">
          <img src={kit} className="kitImage" alt="kit"/>
        </section>
            <div className="githubAndWebsite">
              <a href="https://kitsocial2022.herokuapp.com/"  rel="noreferrer" target="_blank">
                <button className="website">
                  View App
                </button>
              </a>
              <p className="gitHub"> 
                <a href="https://github.com/sophiehomer/kit" className='gitHubLink'  rel="noreferrer" target="_blank">GitHub</a> 
              </p>
            </div>
          </section>
    </div>
    </>
  
  )
}

export default Kit