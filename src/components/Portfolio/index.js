import React from 'react'
import './styles.css'
import dinnerDrinksImage from '../../assets/portfolio/dinner-drinks.png'
import kitImage from '../../assets/portfolio/kit-img.png'
import weatherDashboardImage from '../../assets/portfolio/weather-dashboard.png'
// import workDaySchedulerImage from '../../assets/portfolio/work-day-scheduler.png'
import drawTheLineImage from '../../assets/portfolio/draw-the-line.png'
import { FaGithub } from 'react-icons/fa';


const Portfolio = () => {
  return (
    <>
   <h1 className="portfolioTitle">Portfolio</h1>
    <main className="portfolioImages" id="portfolioImages">
    <section className="drawTheLineContainer">
        <div className="app">
          <a href="https://draw-the-line-repo.herokuapp.com/">
            <img src={drawTheLineImage} className="drawTheLineImg" alt="drawTheLine"/> 
          </a>
        </div>
       
        <div className="appSummary">
          <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'> Debate Platform Application <FaGithub size={15}/></a> 
          <p className="summary">
            Built with React, JavaScript, Node.js, GraphQL, Apollo, Mongoose, mongoDb, Bycrypt, Bad Words npm package.
          </p>
          <p className="summary">
          Draw the Line is a community moderated debate platform. Users have the ability to downvote comments or posts they find offensive or unconstrucive. Once a comment's or post's downvote make up 60% of its overall likes and dislikes, it is removed.
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
          <a href="https://github.com/kpbader/kit" className='gitHubLinkLeft'> Social Application <FaGithub size={15}/></a> 
          <p className="summary">
            Built with Express, MySQL, Sequelize, Bycrypt, UUID, and Cloudinary.
          </p>
          <p className="summary">
            KIT is a social application where users can post, comment, like and dislike. The incentive behind the application began with genuine friendships made throughout the course of coding bootcamp. I felt our class had created a kind, helpful and outgoing community and I wanted that bond to continue.
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
          <a href="https://github.com/Abarragan89/dinner-drinks" className='gitHubLinkRight'> Recipe and Cocktail Search Engine <FaGithub size={15}/></a>
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
          <a href="https://sophiehomer.github.io/Weather-Dashboard/" >
            <img src={weatherDashboardImage} className="weatherDashboardImg" alt="weatherDashboard"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/sophiehomer/Weather-Dashboard" className='gitHubLinkLeft'> Weather Application<FaGithub size={15}/></a>
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

