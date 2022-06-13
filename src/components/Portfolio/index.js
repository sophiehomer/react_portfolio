import React from 'react'
import './styles.css'
import dinnerDrinksImage from '../../assets/portfolio/dinner-drinks.png'
import kitImage from '../../assets/portfolio/kit-img.png'
import weatherDashboardImage from '../../assets/portfolio/weather-dashboard.png'
import workDaySchedulerImage from '../../assets/portfolio/work-day-scheduler.png'
import drawTheLineImage from '../../assets/portfolio/draw-the-line.png'
import { FaGithub } from 'react-icons/fa';


const Portfolio = () => {
  return (
    <>
    <main className="portfolioImages">
      
    <section className="drawTheLineContainer">
        <div className="app">
          <a href="https://draw-the-line-repo.herokuapp.com/">
            <img src={drawTheLineImage} className="drawTheLineImg" alt="drawTheLine"/> 
          </a>
        </div>
       
        <div className="appSummary">
          <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'> DEBATE PLATFORM APPLICATION <FaGithub size={15}/></a> 
          <p className="summary">
            Built with React, html, css
          </p>
        </div>
      </section>

      <section className="kitContainer">
        <div className="app">
          <a href="https://blooming-anchorage-21473.herokuapp.com/">
            <img src={kitImage} className="kitImg" alt="kit"/> 
          </a>
        </div>
       
        <div className="appSummary">
          <a href="https://github.com/kpbader/kit" className='gitHubLinkLeft'> SOCIAL APPLICATION <FaGithub size={15}/></a> 
          <p className="summary">
            Built with Express, MySQL, Sequelize, Bycrypt, UUID, cloudinary
          </p>
          <p className="summary">
          The motivation behind KIT was fueled by the genuine friendships made during the hardships of this course. We felt our class has created a kind, helpful and outgoing community and we wanted to make sure that bond stayed true throughout time.
          </p>
        </div>
      </section>


      <section className="dinnerDrinkContainer">
        <div className="app">
          <a href="https://abarragan89.github.io/dinner-drinks/">
            <img src={dinnerDrinksImage} className="dinnerDrinksImg" alt="dinnerDrinks"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/Abarragan89/dinner-drinks" className='gitHubLinkRight'> RECIPE AND COCKTAIL SEARCH ENGINE <FaGithub size={15}/></a>
          <p>
            Built with Express, MySQL, Sequelize, Bycrypt, UUID, cloudinary
          </p>
        </div>
      </section>


      <section className="weatherContainer">
        <div className="app">
          <a href="https://sophiehomer.github.io/Weather-Dashboard/" >
            <img src={weatherDashboardImage} className="weatherDashboardImg" alt="weatherDashboard"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/sophiehomer/Weather-Dashboard" className='gitHubLinkLeft'> WEATHER APPLICATION <FaGithub size={15}/></a>
        </div>
      </section>

      <section className="schedulerContainer">
      <div className="app">
        <a href="https://sophiehomer.github.io/work-day-scheduler/" >
          <img src={workDaySchedulerImage} className="workDaySchedulerImg" alt="workDayScheduler"/>
        </a>
      </div>

      <div className="appSummary">
        <a href="https://github.com/sophiehomer/work-day-scheduler" className='gitHubLinkLeft'> WORK DAY SCHEDULER <FaGithub size={15}/></a>
      </div>  
      </section>

    </main>
    </>
  )
}

export default Portfolio

