import React from 'react'
import './styles.css'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 

      <button className="portfolio" onClick={handleClick}>
        PORTFOLIO
      </button>

      <button className="resume" onClick={handleClick}>
        RESUME
      </button>

      <h1 className="sophieHomer">SOPHIE HOMER</h1>

      <button className="about" onClick={handleClick}>
        ABOUT
      </button>

      <button className="contact" onClick={handleClick}>
        CONTACT
      </button>
  
  </nav>
  )
}

export default Navigation