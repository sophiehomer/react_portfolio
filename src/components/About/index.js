import React from 'react'
import './styles.css'
import Navigation from '../Navigation'
// import { BsArrowRightShort } from 'react-icons/bs'

// import aboutImage from '../../assets/about/profilepic.jpg';

const About = () => {
  return (
    <section className="aboutContent" id="aboutContent">
      <div className="aboutTextDiv">
      <h1 className="title">Sophie Homer </h1>
      <h2 className="introText">Full stack developer with a passion for product design.</h2>
      <p className="aboutText">
        Previously, I worked in costume design where I discovered a love of visual storytelling. Now, storytelling is what drives my product design. In my work, I strive to find balance between form and function, focusing on detail while never letting the broader picture out of sight. I find joy in making things both beautiful and easy to use. In my free time, I like to cook, curate playlists, and catch up on my favorite shows.
        </p>
      </div>
      <Navigation/>
    </section>
  )
}

export default About
