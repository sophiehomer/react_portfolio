import React from 'react'
import './styles.css'
import dinnerDrinksImage from '../../assets/portfolio/dinner-drinks.png'
import kitImage from '../../assets/portfolio/kit-img.png'
import weatherDashboardImage from '../../assets/portfolio/weather-dashboard.png'
import workDaySchedulerImage from '../../assets/portfolio/work-day-scheduler.png'
import { FaGithub } from 'react-icons/fa';


const Portfolio = () => {
  return (
    <>
    <div className="portfolioImages">
    <h2 className="project">
      <a href="https://github.com/kpbader/kit" className='githubIcon'><FaGithub size={25}/></a> 
      SOCIAL APPLICATION
    </h2>
    <a href="https://blooming-anchorage-21473.herokuapp.com/">
      <img src={kitImage} className="kitImg" style={{ width: "40%" }} alt="kit"/>
    </a>
    <h2 className="project">
      <a href="https://github.com/Abarragan89/dinner-drinks" className='githubIcon'><FaGithub size={25}/></a>
      RECIPE AND COCKTAIL SEARCH ENGINE
    </h2>
    <a href="https://abarragan89.github.io/dinner-drinks/">
      <img src={dinnerDrinksImage} className="dinnerDrinksImg" style={{ width: "40%" }} alt="dinnerDrinks"/>
    </a>
    <h2 className="project">
      <a href="https://github.com/sophiehomer/Weather-Dashboard" className='githubIcon'><FaGithub size={25}/></a>
       WEATHER APPLICATION
    </h2>
    <a href="https://sophiehomer.github.io/Weather-Dashboard/" >
      <img src={weatherDashboardImage} className="weatherDashboardImg" style={{ width: "40%" }} alt="weatherDashboard"/>
    </a>
    <h2 className="project">
      <a href="https://github.com/sophiehomer/work-day-scheduler" className='githubIcon'><FaGithub size={25}/></a>
      WORK DAY SCHEDULER
    </h2> 
    <a href="https://sophiehomer.github.io/work-day-scheduler/" >
      <img src={workDaySchedulerImage} className="workDaySchedulerImg" style={{ width: "40%" }} alt="workDayScheduler"/>
    </a>
    </div>
    </>
  )
}

export default Portfolio

