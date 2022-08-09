import React from 'react'
import { FaGithub } from 'react-icons/fa';
// import { AiOutlineArrowRight } from 'react-icons/ai'


const DinnerDrinks = () => {
  return (
    <>
    <h1>Dinner & Drinks</h1>
    <div className="dinnerDrinksPage">
       
      <section className="dinnerDrinksContainer">
        <div className="app">
          <a href="https://abarragan89.github.io/dinner-drinks/"  rel="noreferrer" target="_blank">
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/Abarragan89/dinner-drinks" rel="noreferrer" className='gitHubLinkRight' target="_blank"> Recipe and Cocktail Search Engine <FaGithub size={15}/></a>
          <p className="summary">
            Built with  Javascript, HTML, CSS, Spoonacular API and Cocktails DB API.
          </p>
          <p className="summary">
            This application generates curated recipes around user preferences. The user can search up food recipes based on cuisine and dietary restrictions, as well as look up cocktails recipes based on alcohol preference. The user has the ability to favorite recipes which are displayed on the users favorites page.
          </p>
        </div>
      </section>
    </div>
    </>
  
  )
}

export default DinnerDrinks