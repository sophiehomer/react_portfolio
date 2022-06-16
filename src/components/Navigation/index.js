import React from 'react'
import './styles.css'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 

      <h1 className="sophieHomer">Sophie Homer</h1>
 
      <div>
        <a href="#portfolioImages" className="portfolio" onClick={handleClick}>
        Portfolio
        </a>

        <a href="#resumeList" className="resume" onClick={handleClick}>
         Resume
        </a>

        <a href="#aboutContent" className="about" onClick={handleClick}>
          About
        </a>

        <a href="#contactForm" className="contact" onClick={handleClick}>
          Contact
        </a>
      </div>
    
  
  </nav>
  )
}

export default Navigation