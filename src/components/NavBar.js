import './Navbar.css'
const NavBar = () => {
  return (
    <div className="nav">
      <h3>Ellie Stevens</h3>
      <ul className="nav-list">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
   );
}

export default NavBar;
