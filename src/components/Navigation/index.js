import React from 'react'
import './styles.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 
        <Link to="/about_extended" className="aboutExtended">
          Learn more about me <AiOutlineArrowRight className="arrow" size={20}/>
        </Link>

        <Link to="/work" className="aboutExtended">
        Check out my work <AiOutlineArrowRight className="arrow" size={20}/>
        </Link>

        <Link to="/resume" className="aboutExtended">
        View my resume <AiOutlineArrowRight className="arrow" size={20}/>
        </Link>

        <a href='mailto:sophiehomer94@gmail.com' className='aboutExtended'>Reach out <AiOutlineArrowRight className="arrow" size={20}/></a>
  </nav>
  
  )
}

export default Navigation