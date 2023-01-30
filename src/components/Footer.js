import './Footer.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="footer__section">
      <div>
        <p>Ellie Stevens</p>
      </div>
      <div>
        <ul className="footer__li">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/elliestevens/" target="_blank" rel="noreferrer">< IoLogoLinkedin className="footer__icon"/></a><br></br>
        <a href="https://github.com/Elliee" target="_blank" rel="noreferrer"><IoLogoGithub className="footer__icon" /></a>
      </div>
    </div>
   );
}

export default Footer;
