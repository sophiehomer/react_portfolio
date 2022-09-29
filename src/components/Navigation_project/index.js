import React from 'react'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'
import { HashLink as Link } from 'react-router-hash-link';


const NavProject = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="projectNav"> 
      <Link to="/about_extended" className="aboutNav">
        About
      </Link>
      <Link to="/Work" className="portfolioNav">
        Work
      </Link>
      <a download href= {Pdf} rel="noreferrer" target="_blank" className="resumeNav">
        Resume
      </a>
      <a href='mailto:sophiehomer94@gmail.com' className='contactNav'>Reach out</a>
  </nav>
  )
}

export default NavProject