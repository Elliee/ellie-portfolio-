import profileImage from '../images/profileImage.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="header section">
      <div>
        <img className="profile-image" src={profileImage} alt="Ellie Stevens Profile" />
      </div>
        <div>
          <p className="header__top">HI THERE! I'M</p>
          <h1><span className="header__purple">ELLIE</span>STEVENS</h1>
          <p className="header__bottom">A Full stack software developer passionate about solving complex problems and creating
          simple and intuitive user experiences on the web 👩🏻‍💻
          </p>
        </div>
    </div>
   );
}

export default Header;
