import React from 'react'
import './styles.css'
import Navigation from '../Navigation'
// import { BsArrowRightShort } from 'react-icons/bs'

// import aboutImage from '../../assets/about/profilepic.jpg';

const About = () => {
  return (
    <section className="aboutContent" id="aboutContent">
      {/* <img src={aboutImage} className="aboutImg" style={{ width: "30%" }} alt="about" /> */}
      <div className="aboutTextDiv">
      <p className="aboutText">
          <h1>Hi, I'm Sophie. I'm a full stack developer and my passion resides in product design.</h1>
          
          I find joy in the tension between the big picture and the detail.
          Previously, I worked in costumes for film and television. When I'm not coding or messing around on Figma, I'm cooking, listening to music, and catching up on my favorite shows.
        </p>
      </div>
      <Navigation/>
    </section>
  )
}

export default About
