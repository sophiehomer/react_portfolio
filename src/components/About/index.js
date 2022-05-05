import React from 'react'
import './styles.css'
import aboutImage from '../../assets/about/about-image.jpg';

const About = () => {
  return (
    <>
    <div className="pageTitle">ABOUT</div>
    <img src={aboutImage} className="aboutImg" style={{ width: "25%" }} alt="about" />
      <p className="aboutText">
        Sophie Homer is a multidisciplinary creative. She's always had a keen eye for clean, functional, design. Her creative appetite is fueled by believing good design begins with accessibility. Sophie was born and raised in Los Angeles,
        California. She worked in costumes for television and film for nearly ten years before pursing her dreams in web development. She lives in Los Angeles.
      </p>
    
    </>
  )
}

export default About