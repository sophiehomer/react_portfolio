import React from 'react'
import './styles.css'
import aboutImage from '../../assets/about/neumorphism-poloroid.png';

const About = () => {
  return (

    <section className="aboutContent">
      <div className="myPhotoContainer">
      <img src={aboutImage} className="aboutImg" style={{ width: "60%" }} alt="about" />
      </div>
      <div className="aboutTextDiv">
        <p className="aboutText">
          Sophie Homer is a multidisciplinary creative. She's always had a keen eye for clean, functional, design. Her creative appetite is fueled by believing good design begins with accessibility.
        </p>
        <p className="aboutText">
          Sophie was born and raised in Los Angeles, California. She worked in costumes for television and film for eight years before pursing her career in web development and UI Design. Sophie resides in West Hollywood, California. She's passionate about music, history and design.
        </p>
      </div>
    </section>
  )
}

export default About
