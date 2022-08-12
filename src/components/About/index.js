import React from 'react'
import './styles.css'
import Navigation from '../Navigation'
// import { BsArrowRightShort } from 'react-icons/bs'

// import aboutImage from '../../assets/about/profilepic.jpg';

const About = () => {
  return (
    <section className="aboutContent" id="aboutContent">
      <div className="aboutTextDiv">
      <h1>Hi, I'm Sophie. </h1>
      <p className="aboutText">
          I'm a full stack developer and my passion is product design.
          I find joy in the tension between form versus function, the big picture versus the details and old versus new. Previously, I worked in costumes for film and television, studying the art of visual storytelling. On my free time, I love to cook, curate playlists, catch up on my favorite shows and dabble in pottery.
        </p>
      </div>
      <Navigation/>
    </section>
  )
}

export default About
