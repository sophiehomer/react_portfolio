import React from 'react'
// import { FaGithub } from 'react-icons/fa';
import NavProject from '../../components/Navigation_project';
import dinnerDrinks from '../../../src/assets/dinner_drinks/dinner_drinks.svg'



const DinnerDrinks = () => {
  return (
    <>
     <NavProject/>
    <h1 className="projectTitle">Dinner & Drinks</h1>
    <div className="kitPage">
        <section className="kitSummaryContainer">
          <p className="kitSummary">
          This application generates curated recipes around user preferences. The user can search up food recipes based on cuisine and dietary restrictions, as well as look up cocktails recipes based on alcohol preference. The user has the ability to favorite recipes which are displayed on the users favorites page.
          </p>
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
                  Javascript <br></br> HTML <br></br> CSS <br></br> Spoonacular API <br></br> Cocktails DB API
                </p>
              </p>
            </div>
          </section>
        </section>


        <section className="gitHubWebsiteContainer">
        <section className="kitImageSection">
          <img src={dinnerDrinks} className="kitImage" alt="femmeDept"/>
        </section>
            <div className="githubAndWebsite">
              <a href="https://sophiehomer.github.io/dinner_and_drinks/"  rel="noreferrer" target="_blank">
                <button className="website">
                  Open App
                </button>
              </a>
              <p className="gitHub"> 
              <a href="https://github.com/sophiehomer/dinner_and_drinks" className='gitHubLink'  rel="noreferrer" target="_blank">GitHub</a> 
              </p>
            </div>
          </section>
    </div>
    </>
  
  )
}

export default DinnerDrinks