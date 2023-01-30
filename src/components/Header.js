import profileImage from '../images/profileImage.jpg'
import './Header.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header section" id="home">
      <div>
        <img className="profile-image" src={profileImage} alt="Ellie Stevens Profile" />
      </div>
        <div>
          <p className="header__top">HI THERE! I'M</p>
          <h1><span className="header__purple">ELLIE</span> STEVENS</h1>
          <p className="header__bottom">Full stack software developer passionate about solving complex problems and creating
          simple and intuitive user experiences on the web 👩🏻‍💻
          </p>
        <a href="https://github.com/Elliee" target="_blank" rel="noreferrer" className="header__icon"><  IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/elliestevens/" target="_blank" rel="noreferrer" className="header__icon">< IoLogoLinkedin /></a>
        </div>
    </div>
   );
}

export default Header;
