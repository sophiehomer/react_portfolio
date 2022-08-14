import React from 'react'
// import { Link } from 'react-router-dom'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'
import { HashLink as Link } from 'react-router-hash-link';


const NavProject = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="projectNav"> 
      <Link to="/sophie_homer_portfolio#aboutContent" className="aboutNav">
      About
    </Link>
    <Link to="/sophie_homer_portfolio#femmeDeptContainer" className="portfolioNav">
      Work
    </Link>
    <a download href= {Pdf} rel="noreferrer" target="_blank" className="resumeNav">
      Resume
    </a>
    <Link to="/sophie_homer_portfolio#contactSection" className="contactNav">
      Contact
    </Link>
       
  </nav>
  )
}

export default NavProject