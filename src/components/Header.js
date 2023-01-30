import profileImage from '../images/profileImage.jpg'
import './Header.css'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header section" id="home">
      <div>
        <img className="profile-image" src={profileImage} alt="Ellie Stevens Profile" />
      </div>
        <div>
          <p className="header__top">HI THERE! I'M</p>
          <h1><span className="header__purple">ELLIE</span> STEVENS</h1>
          <p className="header__bottom">A Full stack software developer passionate about solving complex problems and creating
          simple, intuitive user experiences on the web 👩🏻‍💻
          </p>
        <a href="https://github.com/Elliee" target="_blank" className="header__icon">< FaGithubAlt /></a>
        <a href="https://www.linkedin.com/in/elliestevens/" target="_blank" className="header__icon">< FaLinkedin /></a>
        </div>
    </div>
   );
}

export default Header;
