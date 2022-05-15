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
      
    <a href="https://blooming-anchorage-21473.herokuapp.com/">
      <img src={kitImage} className="kitImg" style={{ width: "40%" }} alt="kit"/>
    </a>
    <a href="https://github.com/kpbader/kit" className='gitHubLink'> SOCIAL APPLICATION <FaGithub size={15}/></a> 
    
    <a href="https://abarragan89.github.io/dinner-drinks/">
      <img src={dinnerDrinksImage} className="dinnerDrinksImg" style={{ width: "40%" }} alt="dinnerDrinks"/>
    </a>
    <a href="https://github.com/Abarragan89/dinner-drinks" className='gitHubLink'> RECIPE AND COCKTAIL SEARCH ENGINE <FaGithub size={15}/></a>

    <a href="https://sophiehomer.github.io/Weather-Dashboard/" >
      <img src={weatherDashboardImage} className="weatherDashboardImg" style={{ width: "40%" }} alt="weatherDashboard"/>
    </a>
    <a href="https://github.com/sophiehomer/Weather-Dashboard" className='gitHubLink'> WEATHER APPLICATION <FaGithub size={15}/></a>

    <a href="https://sophiehomer.github.io/work-day-scheduler/" >
      <img src={workDaySchedulerImage} className="workDaySchedulerImg" style={{ width: "40%" }} alt="workDayScheduler"/>
    </a>
    <a href="https://github.com/sophiehomer/work-day-scheduler" className='workDaySchedulerLink'> WORK DAY SCHEDULER <FaGithub size={15}/></a>
    </div>
    </>
  )
}

export default Portfolio

