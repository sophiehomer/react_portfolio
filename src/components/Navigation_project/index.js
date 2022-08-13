import React from 'react'
// import { Link } from 'react-router-dom'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'
import { Link } from 'react-router-dom'


const NavProject = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="projectNav"> 
    <Link to="/sophie_homer_portfolio" className="femmeDeptPageLink">
    About 
    </Link>
        {/* <a href="#portfolioImages" className="portfolioNav" onClick={handleClick} >
            About 
        </a> */}
        <a download href= {Pdf} rel="noreferrer" target="_blank" className="resumeNav">
            Resume
        </a>
        <a href="#contactForm" className="contactNav" onClick={handleClick}>
          Contact
        </a>
  </nav>
  )
}

export default NavProject