import React from 'react'
import './styles.css'
import { BsArrowRightShort } from 'react-icons/bs'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'



const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 
        <a href="#portfolioImages" className="portfolio" onClick={handleClick} >
        Check out my work <BsArrowRightShort />
        </a>
{/* 
        <a href="#resumeDiv" className="resume" onClick={handleClick}>
         Download my resume <BsArrowRightShort />
        </a> */}

        <a download href= {Pdf} rel="noreferrer" target="_blank" className="resume">Download my resume <BsArrowRightShort /></a>

        {/* <a href="/" className="about" onClick={handleClick}>
          About
        </a> */}

        <a href="#contactForm" className="contact" onClick={handleClick}>
          Reach out <BsArrowRightShort />
        </a>
  </nav>
  )
}

export default Navigation