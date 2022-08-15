import React, { useEffect } from 'react'
import analysis from '../../assets/femme_dept/analysis.svg'
import basicDesignElements from '../../assets/femme_dept/basicDesignElements.svg'
import product from '../../assets/femme_dept/product.svg'
import NavProject from '../../components/Navigation_project';

const FemmeDept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <NavProject/>
    <h1 id="projectTitle" className="projectTitle">Femme Dept.</h1>
    <div className="femmeDeptPage">
       <section className="summaryAndImageContainer">
       <section className="summaryContainer">
          <p className="femmeDeptSummary">
            A lot of women don't use feminine hygiene soap because it can disrupt the pH balance of their delicate vaginal tissues, causing itching and irritation. When it comes to feminine hygiene soap, there are limited options for women. Most options contain harmful chemicals and synthetic fragrances as well as reflect a corporate design sensibility that doesn’t appeal to most women and isn’t conducive to bath or shower display. Furthermore, the majority of companies lack consciousness in their branding and feed into stigmas that fuel body shame. Many women are shy about their feminine hygiene products, and don't typically display them with pride. 
          </p>
        </section>
        
        <section className="productImageContainer">
          <img src={product} className="productImg" alt="femmeDept"/>
        </section>
      </section> 
        
   
        <div className="prototypeButtonContainer">
          <a href="https://www.figma.com/proto/7FAf3HpoJAngklRnpwSeXV/Femme-Dept.?page-id=0%3A1&node-id=2%3A6146&viewport=576%2C516%2C0.02&scaling=scale-down&starting-point-node-id=2%3A6146"  rel="noreferrer" target="_blank">
            <button className="prototype">
              VIEW PROTOTYPE
            </button>
          </a>
        </div>
      
        <section className="femmeDeptRoleAndTechnology">
            <div>
              <p className="myRole">
                MY ROLE
              </p>
              <p className="femmeDeptRole">
                UX UI design <br></br> User reseach <br></br> Narrative/Storytelling
              </p>
            </div>
            <div>
              <p className="femmeDeptTechnology">
                BUILT WITH
                <p className="figma">
                  Figma
                </p>
              </p>
            </div>
          </section>

          <section className="problemContainer">
              <h2 className="problem">PROBLEM</h2>
              <p className="problemSummary">
                Most intimate soaps options contain harmful chemicals and synthetic fragrances as well as reflect a corporate design sensibility. Furthermore, the majority of companies lack consciousness in their branding and feed into stigmas that fuel body shame.
              </p>
          </section>

          <section className="solutionContainer">
              <h3 className="solution">SOLUTION</h3>
              <p className="solutionSummary">
                Femme Dept. is a clean-ingredient, “body part-positive,” aesthetically designed feminine soap that will help to erase the stigmas surrounding vaginal health. The soap is formulated to gently cleanse and nourish the vagina, using all natural base ingredients. Femme Dept strives to give women an accessible product that provides confidence, while balancing the healthy vaginal pH level.              
              </p>
          </section>

          <section className="researchContainer">
              <h4 className="research">USER RESEARCH</h4>
              <p className="researchSummary">
                I conducted interviews with multiple female friends, colleagues and family members to get an idea of where they stood with feminine hygiene products. I gathered insight from women from ages 18 to 65. My overall findings were they were unsatisfied with the current products available. The reasons varied from ingredients, stigmas around intimate soap, and shame fueling packaging.   
              </p>
          </section>

          <div className="competitiveAnalysisContainer">
            <h5 className="competitiveAnalysis"> COMPETITIVE ANALYSIS</h5>
            <img src={analysis} className="competitiveAnalysisImg" alt="competitiveAnalysis"/> 
          </div>

          <div className="basicDesignElementsContainer">
            <h5 className="basicDesignElements">BASIC DESIGN ELEMENTS</h5>
            <img src={basicDesignElements} className="basicDesignElementsImg" alt="basicDesignElements"/> 
          </div>
      </div>
    </>
  
  )
}

export default FemmeDept;