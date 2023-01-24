import './Contact.css'
import { IoMailSharp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";




const Contact = () => {
  return (
    <div className="contact-section section" id="contact">
      <h3 className="section__heading">Contact</h3>
      <hr className="section__underline"></hr>
      <div className="contact-flex">
        <div>

          <div className="contact__box">
            < IoMailSharp className="contact__icon" /><br></br>
            <a href="mailto:elliebstevens@gmail.com">Send an email</a>
          </div>
          <div className="contact__box">
            < IoLogoLinkedin className="contact__icon"/><br></br>
            <a href="https://www.linkedin.com/in/elliestevens/" target="_blank">Connect on LinkedIn</a>
          </div>
          <div className="contact__box">
            < IoLocationSharp className="contact__icon" />
            <p>Melbourne, Aus.</p>
          </div>
        </div>
        <div>
          <form className="contact__form" action="mailto:elliebstevens@gmail.com">
            <input type="text" placeholder="name" className="contact__input" required/>
            <input type="text" placeholder="email" className="contact__input" required /><br></br>
            <textarea placeholder="message" className="contact__textarea" required></textarea><br></br>
            <input type="submit" value="Send" className="contact__btn"/>
          </form>
        </div>
      </div>
    </div>
   );
}

export default Contact;
