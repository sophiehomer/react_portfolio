import React from 'react'
import './styles.css'
import femmeDept from '../../assets/portfolio/femme_dept.png'
import kit from '../../assets/portfolio/kit.png'
import dinnerDrinks from '../../assets/portfolio/dinner_drinks.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <main className="portfolioImages" id="portfolioImages">

    <section id="femmeDeptContainer" className="femmeDeptContainer">
      <div className="femmeDeptApp">
        <Link to="/femme_dept" className="femmeDeptImgLink">
          <img src={femmeDept} className="femmeDeptImg" alt="femmeDept"/>
        </Link>

        <div className="fdProductAndRole">
        <Link to="/femme_dept" className="femmeDeptProductAndRole">
          <p className="product">
              Intimate Soap
          </p>
          <p className="role">
            Product design, user research
          </p>
        </Link>
      </div>
      </div>
     
    </section>

    <section className="kitContainer">
      <div className="kitApp">
        <Link to="/kit" className="kitImageLink">
          <img src={kit} className="kitImg" alt="drawTheLine"/>
        </Link> 
      </div>
      <div className="kitProductAndRole">
        <Link to="/kit" className="kitPageLink">
          <p className="product">
            Social Application
          </p>
          <p className="role">
           Front-end developer, UX/UI
          </p>
        </Link>
      </div>
    </section>

      <section className="dinnerDrinksContainer">
          <div className="app">
            <Link to="/dinner_drinks" className="dinnerDrinkImageLink">
              <img src={dinnerDrinks } className="dinnerDrinksImg" alt="dinnerDrinks"/>
            </Link>
          </div>
          <div className="ddProductAndRole">
            <Link to="/dinner_drinks" className="dinnerDrinkPageLink">
              <p className="product">
                Food & Cocktail Recipe Application          
              </p>
              <p className="role">
                Front-end developer, UX UI
              </p>
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}

export default Portfolio

