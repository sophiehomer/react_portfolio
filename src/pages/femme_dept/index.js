import React, { useEffect } from 'react'
import analysis from '../../assets/femme_dept/analysis.webp'
import basicDesignElements from '../../assets/femme_dept/basicDesignElements.webp'
import product from '../../assets/femme_dept/product.webp'
import landingPage from '../../assets/femme_dept/LandingPage.webp'
import subscription from '../../assets/femme_dept/Subscription.webp'
import about from '../../assets/femme_dept/About.webp'
import login from '../../assets/femme_dept/Login.webp'
import loginComplete from '../../assets/femme_dept/LoginComplete.webp'
import signup from '../../assets/femme_dept/Signup.webp'
import signupComplete from '../../assets/femme_dept/SignupComplete.webp'
import myAccount from '../../assets/femme_dept/myAccount.webp'
import myAccount2 from '../../assets/femme_dept/myAccount2.webp'
import myAccountUpdateAddress from '../../assets/femme_dept/myAccountUpdateAddress.webp'
import myAccountUpdateAddressComplete from '../../assets/femme_dept/myAccountUpdateAddressComplete.webp'
import intimateSoap from '../../assets/femme_dept/intimateSoap.webp'
import intimateSoapIngredients from '../../assets/femme_dept/intimateSoapIngredients.webp'
import intimateSoapSubscription from '../../assets/femme_dept/intimateSoapSubscription.webp'
import intimateSoapSubscription2 from '../../assets/femme_dept/intimateSoapSubscription2.webp'
import intimateSoapSubscription3 from '../../assets/femme_dept/intimateSoapSubscription3.webp'
import shoppingBag from '../../assets/femme_dept/shoppingBag.webp'
import contactInfoEmpty from '../../assets/femme_dept/contactInfoEmpty.webp'
import contactInfoComplete from '../../assets/femme_dept/contactInfoComplete.webp'
import standardShipping from '../../assets/femme_dept/standardShipping.webp'
import expressShipping from '../../assets/femme_dept/expressShipping.webp'
import rushShipping from '../../assets/femme_dept/rushShipping.webp'
import paymentStandardShipping from '../../assets/femme_dept/paymentStandardShipping.webp'
import paymentExpressShipping from '../../assets/femme_dept/paymentExpressShipping.webp'
import paymentRushShipping from '../../assets/femme_dept/paymentRushShipping.webp'
import PaymentCompleteStandardShipping from '../../assets/femme_dept/PaymentCompleteStandardShipping.webp'
import PaymentCompleteExpressShipping from '../../assets/femme_dept/PaymentCompleteExpressShipping.webp'
import PaymentCompleteRushShipping from '../../assets/femme_dept/paymentCompleteRushShipping.webp'
import billingStandardShipping from '../../assets/femme_dept/billingStandardShipping.webp'
import billingExpressShipping from '../../assets/femme_dept/billingExpressShipping.webp'
import billingRushshipping from '../../assets/femme_dept/billingRushshipping.webp'
import orderReviewStandardShipping from '../../assets/femme_dept/orderReviewStandardShipping.webp'
import orderReviewExpressShipping from '../../assets/femme_dept/orderReviewExpressShipping.webp'
import billingCompleteRushShipping from '../../assets/femme_dept/billingCompleteRushShipping.webp'
import orderReviewRushShipping from '../../assets/femme_dept/orderReviewRushShipping.webp'
import orderComplete from '../../assets/femme_dept/orderComplete.webp'
import NavProject from '../../components/Navigation_project';

const FemmeDept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <NavProject/>
    <div className="femmeDeptPage">
       <section className="summaryAndImageContainer">
       <section className="summaryContainer">
          <p className="femmeDeptSummary">
            A lot of women don't use feminine hygiene soap because it can disrupt the pH balance of their delicate vaginal tissues, causing itching and irritation. When it comes to feminine hygiene soap, there are limited options for women. Most options contain harmful chemicals and synthetic fragrances as well as reflect a corporate design sensibility that doesn’t appeal to most women and isn’t conducive to bath or shower display. Furthermore, the majority of companies lack consciousness in their branding and feed into stigmas that fuel body shame. Many women are shy about their feminine hygiene products, and don't typically display them with pride. 
          </p>
        </section>
        
        <section className="productImageContainer">
          <img src={product} className="productImg" alt="femmeDept"/>
          <div className="prototypeButtonContainer">
          <a href="https://www.figma.com/proto/gzyVH9sBkvDVKzkVnvyBod/Femme-Dept.?page-id=0%3A1&node-id=1%3A139&viewport=3663%2C755%2C0.11&scaling=scale-down&starting-point-node-id=1%3A418"  rel="noreferrer" target="_blank">
            <button className="prototype">
              View Prototype
            </button>
          </a>
        </div>
        </section>
      </section>       
        <section className="femmeDeptRoleAndTechnology">
            <div>
              <p className="myRole">
                My Role
              </p>
              <p className="femmeDeptRole">
                Product designer <br></br> User reseach <br></br> Narrative/Storytelling
              </p>
            </div>
            <div>
              <p className="femmeDeptTechnology">
                Built With
                <p className="figma">
                  Figma
                </p>
              </p>
            </div>
          </section>

          <section className="problemContainer">
              <h2 className="problem">Problem</h2>
              <p className="problemSummary">
                Most intimate soaps options contain harmful chemicals and synthetic fragrances as well as reflect a corporate design sensibility. Furthermore, the majority of companies lack consciousness in their branding and feed into stigmas that fuel body shame.
              </p>
          </section>

          <section className="solutionContainer">
              <h3 className="solution">Solution</h3>
              <p className="solutionSummary">
                Femme Dept. is a clean-ingredient, “body part-positive,” aesthetically designed feminine soap that will help to erase the stigmas surrounding vaginal health. The soap is formulated to gently cleanse and nourish the vagina, using all natural base ingredients. Femme Dept strives to give women an accessible product that provides confidence, while balancing a healthy pH level.             
              </p>
          </section>

          <section className="researchContainer">
              <h4 className="research">User Research</h4>
              <p className="researchSummary">
                I researched the feminine hygiene market and conducted multiple interviews with friends, colleagues, and family members to get an idea of where they stood with feminine hygiene products. I gathered insight from women ages 18 to 65. I found they were dissatisfied with the current products available. Reasons varied from ingredients, stigmas around intimate soap, and shame fueling packaging.
              </p>
          </section>

          <div className="competitiveAnalysisContainer">
            <h5 className="competitiveAnalysis"> Competitive Analysis</h5>
            <img src={analysis} className="competitiveAnalysisImg" alt="competitiveAnalysis"/> 
          </div>

          <div className="basicDesignElementsContainer">
            <h6 className="basicDesignElements">Basic Design Elements</h6>
            <img src={basicDesignElements} className="basicDesignElementsImg" alt="basicDesignElements"/> 
          </div>
      </div>
      <h6 className="finalDesign">Final Design</h6>
      <div className="prototypeImageContainer">
      <img src={landingPage} className="landingPage" alt="basicDesignElements"/> 
      <img src={subscription} className="subscription" alt="subscription"/> 
      <img src={about} className="about" alt="about"/> 
      </div>
      <div className="prototypeImageContainer">
      <img src={login} className="login" alt="login"/> 
      <img src={loginComplete} className="loginComplete" alt="loginComplete"/> 
      <img src={signup} className="signup" alt="signup"/> 
      <img src={signupComplete} className="signupComplete" alt="signupComplete"/> 
     
      </div>
      <div className="prototypeImageContainer">
      <img src={myAccount} className="myAccount" alt="myAccount"/> 
      <img src={myAccountUpdateAddress} className="myAccountUpdateAddress" alt="myAccountUpdateAdress"/> 
      <img src={myAccountUpdateAddressComplete} className="myAccountUpdateAddressComplete" alt="myAccountUpdateAddressComplete"/> 
      <img src={myAccount2} className="myAccount2" alt="myAccount2"/> 
      </div>

      <div className="prototypeImageContainer">
      <img src={intimateSoap} className="intimateSoap" alt="intimateSoap"/> 
      <img src={intimateSoapIngredients} className="intimateSoapIngredients" alt="intimateSoapIngredients"/> 
      <img src={intimateSoapSubscription} className="intimateSoapSubscription" alt="intimateSoapSubscription"/> 
      <img src={intimateSoapSubscription2} className="intimateSoapSubscription" alt="intimateSoapSubscription"/> 
      <img src={intimateSoapSubscription3} className="intimateSoapSubscription" alt="intimateSoapSubscription"/> 
      </div>

      <div className="prototypeImageContainer">
      <img src={shoppingBag} className="shoppingBag" alt="shoppingBag"/> 
      <img src={contactInfoEmpty} className="contactInfoEmpty" alt="contactInfoEmpty"/> 
      <img src={contactInfoComplete} className="contactInfoComplete" alt="contactInfoComplete"/> 
      </div> 
      
      <div className="prototypeImageContainer">
      <img src={standardShipping} className="standardShipping" alt="standardShipping"/> 
      <img src={expressShipping} className="expressShipping" alt="expressShipping"/> 
      <img src={rushShipping} className="rushShipping" alt="rushShipping"/> 
      </div>

      <div className="prototypeImageContainer">
      <img src={paymentStandardShipping} className="paymentStandardShipping" alt="paymentStandardShipping"/> 
      <img src={paymentExpressShipping} className="paymentExpressShipping" alt="paymentExpressShipping"/> 
      <img src={paymentRushShipping} className="paymentRushShipping" alt="paymentExpressShipping"/> 
      </div>

      <div className="prototypeImageContainer">
      <img src={PaymentCompleteStandardShipping} className="PaymentCompleteStandardShipping" alt="paymentStandardShipping"/> 
      <img src={PaymentCompleteExpressShipping} className="PaymentCompleteExpressShipping" alt="paymentExpressShipping"/> 
      <img src={PaymentCompleteRushShipping} className="PaymentCompleteRushShipping" alt="paymentExpressShipping"/> 
      </div>
      
      <div className="prototypeImageContainer">
      <img src={billingStandardShipping} className="billingStandardShipping" alt="billingStandardShipping"/> 
      <img src={billingExpressShipping} className="billingExpressShipping" alt="billingExpressShipping"/> 
      <img src={billingRushshipping} className="billingRushshipping" alt="illingRushshipping"/> 
      <img src={billingCompleteRushShipping} className="billingCompleteRushShipping" alt="billingCompleteRushShipping"/> 
      </div>

      <div className="prototypeImageContainer">
      <img src={orderReviewStandardShipping} className="orderReviewStandardShipping" alt="orderReviewStandardShipping"/> 
      <img src={orderReviewExpressShipping} className="orderReviewExpressShipping" alt="orderReviewExpressShipping"/> 
      <img src={orderReviewRushShipping} className="orderReviewRushShipping" alt="orderReviewRushShipping"/> 
      </div>

      <div className="lastPrototypeImageContainer">
      <img src={orderComplete} className="orderComplete" alt="orderComplete"/> 
      </div>
    </>
    
  
  )
}

export default FemmeDept;