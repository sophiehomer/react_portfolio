import { validateEmail } from '../../utils/helpers';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

const Contact = () => {
  const [ formState, setFormState] = useState({name: '', email: '', message: ''})
  const { name, email, message } = formState
  const [errorMessage, setErrorMessage] = useState('');
  // handle error handling and on change events in the form elements
  function handleChange(e) {
      console.log(e.target.name)
      if(e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if(!isValid) {
              setErrorMessage('Invalid email address')
          } else {
              setErrorMessage('');
          }
      } else {
          if(!e.target.value.length) {
              setErrorMessage(`${e.target.name} required`)
          } else {
              setErrorMessage('');
          }
      }
      console.log(formState)
      console.log(e.target.value)
      setFormState({...formState, [e.target.name]: e.target.value})
      if (!errorMessage) {
          setFormState({...formState, [e.target.name]: e.target.value})
      }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6j9wkzn', 'template_3i2ejak', form.current, 'UXp81vn8aAVHrC0RE')
      .then((result) => {
            console.log(result);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log("hello robert")
      e.target.reset()
      setFormState({name: '', email: '', message: ''})
  };

  return (
    <>
    <div className="contactForm">
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <input type="text" name="name" defaultValue={name} className="contactName" id="contact-name"  onBlur={handleChange} placeholder="YOUR NAME"/>
            <input type="text"  name="email" defaultValue={email} className="contactEmail" id="contact-Email" onBlur={handleChange} placeholder="EMAIL ADDRESS"/>
            <textarea name="message" id="contact-message" defaultValue={message} className="contactMessage" onChange={handleChange} placeholder="MESSAGE"></textarea>
            <button className="submitButton" type="submit">SUBMIT</button>

            {errorMessage && (
                    <div>
                        <p className="errorMessage">{errorMessage}</p>
                    </div>
                )} 
          </form>
        </div>
    </>
  )
}

export default Contact