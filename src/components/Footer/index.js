import React from 'react'
import './styles.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';


const Footer = () => {
  return (
      <footer>
          <a href='https://github.com/sophiehomer' className='githubIcon'><FaGithub size={25}/></a>
          <a href='https://www.linkedin.com/in/sophie-homer-94603633/' className='linkedInIcon'><FaLinkedin size={25}/></a>
          <a href='https://stackoverflow.com/users/17585483/sophie-homer' className='stackOverflowIcon'><FaStackOverflow size={25}/></a>
          <a href='mailto:sophiehomer94@gmail.com' className='emailIcon'><AiFillMail size={25}/></a>
      </footer>
  )
}

export default Footer