import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu'
import "./sidebar.css";

const NavProject = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  
  return (
    <div className="nav-project">
     <Link to="/sophie_homer_portfolio" className="home">
        Sophie Homer
      </Link>
    <nav className="projectNav"> 
    <Menu right={ true } pageWrapId={"page-wrap"} outerContainerId={"App"}>
      <a href="/" id="aboutExtended" className="menu-item">
      <Link to="/about_extended" className="aboutNav">
        About
      </Link>
      </a>
      <a href="/" id="aboutExtended" className="menu-item">
      <Link to="/Work" className="portfolioNav">
        Work
      </Link>
      </a>
      <a href="/" id="aboutExtended" className="menu-item">
      <Link to="/resume" className="resumeNav">
        Resume 
      </Link>
      </a>
      <a href='mailto:sophiehomer94@gmail.com' className='contactNav menu-item'>Reach out</a>
    </Menu>
  </nav>
  </div>

  )
}

export default NavProject