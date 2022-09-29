import React from 'react'
import './styles.css'
import Navigation from '../Navigation'
import Portfolio from '../../components/Portfolio'


const Work = () => {
  return (
    <section className="aboutContent" id="aboutContent">
      <div className="aboutTextDiv">
      <h1 className="title">Sophie Homer </h1>
      <h2 className="introText">Product designer with a background in software development.</h2>
      <p className="aboutText">
      I discovered a love for visual storytelling while working in costume design for film and television. Now, I use that passion for storytelling to inspire my product design. In my work, I strive to find balance between form and function, focusing on detail while keeping the entire canvas in mind -- making things both beautiful and accessible. 
      {/* I’m optimistic, curious, and eager to develop my skills. I love working with others, sharing ideas, and learning from those around me. */}
      <Navigation/>
      </p>
      </div>
   
    </section>
  )
}

export default Work
