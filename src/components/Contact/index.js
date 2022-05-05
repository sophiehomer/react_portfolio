import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <>
    {/* <div className="pageTitle">CONTACT</div> */}
    <div className="contactForm">
          <form className="contactForm">
            <label for="contact-name">Name</label>
            <input type="text" className="contactName" id="contact-name" />

            <label for="contact-email">Email</label>
            <input type="text" className="contactEmail" id="contact-Email" />
        
            <label for="contact-message">Message</label>
            <textarea id="contact-message" className="contactMessage"></textarea>
        
            <button className="submitButton" type="submit">Submit</button>
          </form>
        </div>
    </>
  )
}

export default Contact