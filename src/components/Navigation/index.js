import React from 'react'
import './styles.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'



const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 
        <a href="#portfolioImages" className="portfolio" onClick={handleClick} >
        Check out my work <AiOutlineArrowRight className="arrow" size={20}/>
        </a>
        <a download href= {Pdf} rel="noreferrer" target="_blank" className="resume">Download my resume <AiOutlineArrowRight className="arrow" size={20}/></a>
        <a href="#contactForm" className="contact" onClick={handleClick}>
          Reach out <AiOutlineArrowRight className="arrow" size={20}/>
        </a>
  </nav>
  )
}

export default Navigation