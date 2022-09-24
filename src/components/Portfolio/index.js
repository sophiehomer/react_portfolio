import React from 'react'
import './styles.css'
import femmeDept from '../../assets/portfolio/femme_dept.webp'
import kit from '../../assets/portfolio/kit.webp'
import dinnerDrinks from '../../assets/portfolio/dinner_drinks.webp'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <main className="portfolioImages" id="portfolioImages">

    <section id="femmeDeptContainer" className="femmeDeptContainer">
      <div className="femmeDeptApp" id="femmeDeptApp">
        <div className="fdProductAndRole">
          <Link to="/femme_dept" className="fdPageLink">
            <p className="product">
              Intimate Soap
            </p>
            <p className="role">
              Product design, user research
            </p>
          </Link>
        </div>
        <Link to="/femme_dept" className="femmeDeptImgLink">
          <img src={femmeDept} className="femmeDeptImg" id="femmeDeptImg" alt="femmeDept"/>
        </Link>
      </div>
     
    </section>

    <section className="kitContainer">
      <div className="kitApp">
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
          <Link to="/kit" className="kitImageLink">
            <img src={kit} className="kitImg" alt="drawTheLine"/>
          </Link> 
      </div>
    </section>

      <section className="dinnerDrinksContainer">
          <div className="dinnerDrinksApp">
            <div className="ddProductAndRole">
              <Link to="/dinner_drinks" className="dinnerDrinkPageLink">
                <p className="product">
                  Food & Cocktail Recipe Application          
                </p>
                <p className="role">
                  Front-end developer, UX/UI
                </p>
              </Link>
            </div>
            <Link to="/dinner_drinks" className="dinnerDrinkImageLink">
              <img src={dinnerDrinks} className="dinnerDrinksImg" alt="dinnerDrinks"/>
            </Link>
          </div>
      </section>
    </main>
    </>
  )
}

export default Portfolio

