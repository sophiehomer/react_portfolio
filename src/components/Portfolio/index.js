import React from 'react'
import './styles.css'
import dinnerDrinksImage from '../../assets/portfolio/dinner-drinks.png'
import kitImage from '../../assets/portfolio/kit-img.png'
import weatherDashboardImage from '../../assets/portfolio/weather-dashboard.png'
import workDaySchedulerImage from '../../assets/portfolio/work-day-scheduler.png'


const Portfolio = () => {
  return (
    <>
    {/* <div className="pageTitle">PORTFOLIO</div> */}
    <div className="portfolioImages">
    <a href="https://blooming-anchorage-21473.herokuapp.com/">
    <img src={kitImage} className="kitImg" style={{ width: "40%" }} alt="kit"/>
    </a>
    <a href="https://abarragan89.github.io/dinner-drinks/">
    <img src={dinnerDrinksImage} className="dinnerDrinksImg" style={{ width: "40%" }} alt="dinnerDrinks"/>
    </a>
    <a href="https://sophiehomer.github.io/Weather-Dashboard/" >
    <img src={weatherDashboardImage} className="weatherDashboardImg" style={{ width: "40%" }} alt="weatherDashboard"/>
    </a>
    <a href="https://sophiehomer.github.io/work-day-scheduler/" >
    <img src={workDaySchedulerImage} className="workDaySchedulerImg" style={{ width: "40%" }} alt="workDayScheduler"/>
    </a>
    </div>
    </>
  )
}

export default Portfolio

