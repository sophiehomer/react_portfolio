import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <>
    <div className="contactForm">
          <form className="contactForm">
            <input type="text" className="contactName" id="contact-name" placeholder="YOUR NAME"/>
            <input type="text" className="contactEmail" id="contact-Email" placeholder="EMAIL ADDRESS"/>
            <textarea id="contact-message" className="contactMessage" placeholder="MESSAGE"></textarea>
            <button className="submitButton" type="submit">SUBMIT</button>
          </form>
        </div>
    </>
  )
}

export default Contact