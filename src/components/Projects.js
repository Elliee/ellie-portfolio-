import profileImage from '../images/profileImage.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h3 className="section__heading">Projects</h3>
      <hr className="section__underline"></hr>
      <div className="project-flex section">
        <div className="project-card">
          <img className="project-img" src={profileImage} alt="project"/>
          <p>Project Name</p>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={profileImage} alt="project" />
          <p>Project Name</p>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={profileImage} alt="project" />
          <p>Project Name</p>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={profileImage} alt="project" />
          <p>Project Name</p>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
        <div className="project-card">
          <img className="project-img" src={profileImage} alt="project" />
          <p>Project Name</p>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
          <button><a href="https://www.google.com/" target="_blank">Code</a></button>
        </div>
      </div>
    </div>
   );
}

export default Projects;
