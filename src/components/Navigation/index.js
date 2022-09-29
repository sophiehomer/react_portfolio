import React from 'react'
import './styles.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  return (
    <nav className="nav"> 
          {/* <a href="#femmeDeptApp" className="portfolio" onClick={handleClick} >
        Check out my work <AiOutlineArrowRight className="arrow" size={20}/>
        </a> */}
        <Link to="/about_extended" className="aboutExtended">
          Learn more about me <AiOutlineArrowRight className="arrow" size={20}/>
        </Link>

        <Link to="/work" className="aboutExtended">
        Check out my work <AiOutlineArrowRight className="arrow" size={20}/>
        </Link>

        <a download href= {Pdf} rel="noreferrer" target="_blank" className="resume">View my resume <AiOutlineArrowRight className="arrow" size={20}/></a>
        <a href='mailto:sophiehomer94@gmail.com' className='contact'>Reach out <AiOutlineArrowRight className="arrow" size={20}/></a>
        {/* <a href='https://www.linkedin.com/in/sophie-homer-94603633/'  rel="noreferrer" target="_blank" className='contact'>LinkedIn <AiOutlineArrowRight className="arrow" size={20}/></a> */}      
  </nav>
  
  )
}

export default Navigation