import React from 'react'
import './styles.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
      <footer>
          <a href='https://github.com/sophiehomer' className='githubIcon'><FaGithub size={25}/></a>
          <a href='https://www.linkedin.com/in/sophie-homer-94603633/' className='linkedInIcon'><FaLinkedin size={25}/></a>
          <a href='https://twitter.com/sophiehomerr' className='twitterIcon'><AiOutlineTwitter size={25}/></a>
          <a href='mailto:sophiehomer94@gmail.com' className='emailIcon'><AiFillMail size={25}/></a>
      </footer>
  )
}

export default Footer