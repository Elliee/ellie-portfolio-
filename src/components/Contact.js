import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h3 className="section__heading">Contact</h3>
      <hr className="section__underline"></hr>
      <div className="contact-flex">
        <div>
          <p>Email:</p>
          <a href="mailto:elliebstevens@gmail.com">elliebstevens@gmail.com</a>
          <p>LinkedIn:</p>
          <a href="https://www.linkedin.com/in/elliestevens/">Ellie Stevens</a>
          <p>Location:</p>
          <p>Melbourne, Aus</p>
        </div>
        <div>
          <form className="contact__form" action="mailto:elliebstevens@gmail.com">
            <input type="text" placeholder="name" className="contact__input" required/>
            <input type="text" placeholder="email" className="contact__input" required /><br></br>
            <textarea placeholder="message" className="contact__textarea" required></textarea><br></br>
            <input type="submit" value="send" className="contact__btn"/>
          </form>
        </div>
      </div>
    </div>
   );
}

export default Contact;
