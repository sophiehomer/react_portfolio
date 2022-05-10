import React from 'react'
import './styles.css'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav">  
    <button className="about" onClick={handleClick}>
        ABOUT
    </button>
    <button className="portfolio" onClick={handleClick}>
        PORTFOLIO
    </button>
    <h1 className="sophieHomer">SOPHIE HOMER</h1>
    <button className="contact" onClick={handleClick}>
        CONTACT
    </button>
    <button className="resume" onClick={handleClick}>
        RESUME
    </button>
  </nav>
  )
}

export default Navigation