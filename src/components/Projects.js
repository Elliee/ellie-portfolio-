import toDoList from '../images/toDoList.png'
import landingPage from '../images/landingPage.png'
import weatherApp from '../images/weatherApp.png'
import passwordGenerator from '../images/passwordGenerator.png'
import ftgu from '../images/ftgu.png'
import plantRental from '../images/plantRental.png'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h3 className="section__heading">Projects</h3>
      <hr className="section__underline"></hr>
      <div className="project-flex section">
        <div className="project-card">
          <img className="project-img" src={ftgu} alt="project"/>
          <p>Rails Web App</p>
          <button className="proj__btn"><a href="https://github.com/Elliee/from_the_ground_up" target="_blank">Code</a></button>
          {/* <button className="proj__btn right"><a href="https://www.google.com/" target="_blank">Live</a></button> */}
        </div>
        <div className="project-card">
          <img className="project-img" src={plantRental} alt="plant rental web page" />
          <p>Project Name</p>
          <button className="proj__btn"><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button className="proj__btn right"><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={landingPage} alt="furniture store web page" />
          <p>Responsive landing page</p>
          <button className="proj__btn"><a href="https://github.com/Elliee/furniture-landing" target="_blank">Code</a></button>
          <button className="proj__btn right"><a href="https://elliee.github.io/furniture-landing/" target="_blank">Live</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={passwordGenerator} alt="password generator web page" />
          <p>Password Generator</p>
          <button className="proj__btn"><a href="https://benevolent-bavarois-785686.netlify.app/" target="_blank">Code</a></button>
          <button className="proj__btn right"><a href="https://github.com/Elliee/passwordgenerator" target="_blank">Live</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={toDoList} alt="to do list" />
          <p>To Do List</p>
          <button className="proj__btn"><a href="https://github.com/Elliee/js-to-do-list" target="_blank">Code</a></button>
          <button className="proj__btn right"><a href="https://elliee.github.io/js-to-do-list/" target="_blank">Live</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={weatherApp} alt="weather app" />
          <p>Weather App</p>
          <button className="proj__btn"><a href="https://github.com/Elliee/weather-finder" target="_blank">Code</a></button>
          <button className="proj__btn right"><a href="https://prismatic-gnome-abdb5b.netlify.app/" target="_blank">Live</a></button>
        </div>
      </div>
    </div>
   );
}

export default Projects;
