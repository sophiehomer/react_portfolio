import React from 'react'
import './styles.css'
import dinnerDrinksImage from '../../assets/portfolio/dinner-drinks.png'
// import kitImage from '../../assets/portfolio/kit-img.png'
import weatherDashboardImage from '../../assets/portfolio/weather-dashboard.png'
// import workDaySchedulerImage from '../../assets/portfolio/work-day-scheduler.png'
// import drawTheLineImage from '../../assets/portfolio/draw-the-line.png'
import kit from '../../assets/portfolio/kitLaptop.jpeg'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai'



const Portfolio = () => {
  return (
    <>
    <main className="portfolioImages" id="portfolioImages">

    <section className="kitContainer">
      {/* <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'  rel="noreferrer" target="_blank" ><FaGithub size={20}/> </a> 
      <a href="https://drawtheline2022.herokuapp.com/"  className='gitHubLinkRight' rel="noreferrer" target="_blank">
      < BsFillArrowUpRightSquareFill size={20}/>
      </a> */}
        <div className="app">
          <a href="https://drawtheline2022.herokuapp.com/"  rel="noreferrer" target="_blank">
            <img src={kit} className="kitImg" alt="drawTheLine"/> 
          </a>
        </div>
      <div className="appSummary">
          {/* <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'  rel="noreferrer" target="_blank" > KIT Social Application <FaGithub size={15}/></a>  */}
          <p className="appName">
            KIT Social Application
          </p>
          <p className="role">
            Front-end developer, UX/UI
          </p>
          <p className="technologiesUsed">
            Built with React, JavaScript, Node.js, Apollo, Mongoose, mongoDb, Bycrypt.
          </p>
          <p className="summary">
            This application was developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class.                     
          </p>
          <div className="githubAndWebsiteIcon">
            <p className="openWebsite">
              <a href="https://drawtheline2022.herokuapp.com/"  className='gitHubLinkRight' rel="noreferrer" target="_blank">View <AiOutlineArrowRight className="arrow" size={20}/></a>
            </p>
            <p className="openGithub"> 
              <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'  rel="noreferrer" target="_blank">GitHub <FaGithub size={22} className="githubLink"/></a> 
            </p>
        </div>
      </div>
      </section>

      {/* <section className="kitContainer">
        <div className="app">
          <a href="https://blooming-anchorage-21473.herokuapp.com/" target="_blank">
            <img src={kitImage} className="kitImg" alt="kit"/> 
          </a>
        </div>
       
        <div className="appSummary">
          <a href="https://github.com/kpbader/kit" className='gitHubLinkLeft' target="_blank"> Social Application <FaGithub size={15}/></a> 
          <p className="summary">
            Built with Express, MySQL, Sequelize, Bycrypt, UUID, and Cloudinary.
          </p>
          <p className="summary">
            KIT is a social application where users can post, comment, like and dislike. The incentive behind the application began with genuine friendships made throughout the course of coding bootcamp. I felt our class had created a kind, helpful and outgoing community and I wanted that bond to continue.
          </p>
        </div>
      </section> */}


      <section className="dinnerDrinkContainer">
        <div className="app">
          <a href="https://abarragan89.github.io/dinner-drinks/"  rel="noreferrer" target="_blank">
            <img src={dinnerDrinksImage} className="dinnerDrinksImg" alt="dinnerDrinks"/>
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


      <section className="weatherContainer">
        <div className="app">
          <a href="https://sophiehomer.github.io/Weather-Dashboard/">
            <img src={weatherDashboardImage} className="weatherDashboardImg" alt="weatherDashboard"  rel="noreferrer" target="_blank"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/sophiehomer/Weather-Dashboard" className='gitHubLinkLeft' rel="noreferrer" target="_blank">Weather Application <FaGithub size={15}/></a>
          <p className="summary">
            Built with html, css, JavaScript, jQuery and Open Weather API.
          </p>
          <p className="summary">
            A five-day weather application. Weather details include temperature, wind, humidity and UV index.
          </p>
        </div>
      </section>

      {/* <section className="schedulerContainer">
      <div className="app">
        <a href="https://sophiehomer.github.io/work-day-scheduler/" >
          <img src={workDaySchedulerImage} className="workDaySchedulerImg" alt="workDayScheduler"/>
        </a>
      </div>

      <div className="appSummary">
        <a href="https://github.com/sophiehomer/work-day-scheduler" className='gitHubLinkLeft'> WORK DAY SCHEDULER <FaGithub size={15}/></a>
        <p className="summary">
            Built with JavaScript, jQuery, HTML and CSS.
          </p>
      </div>  
      </section> */}

    </main>
    </>
  )
}

export default Portfolio

