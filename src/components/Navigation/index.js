import React from 'react'
import './styles.css'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav">
    <a className="about" onClick={handleClick}>
        ABOUT
    </a>
    <a className="RESUME" onClick={handleClick}>
        RESUME
    </a>
    <a className="PORTFOLIO" onClick={handleClick}>
        PORTFOLIO
    </a>
    <a className="contact" onClick={handleClick}>
        CONTACT
    </a>
  </nav>
  )
}

export default Navigation