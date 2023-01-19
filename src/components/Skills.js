import profileImage from '../images/profileImage.jpg'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-section section" id="skills">
      <h3 className="section__heading">Skills</h3>
      <hr className="section__underline"></hr>
      <div className="skills-flex">
        <div>
          <h3>Front End</h3>
            <div className="skill-val-flex">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Figma</span>
              <span>Responsive Design</span>
            </div>
          <h3>Back End</h3>
          <div className="skill-val-flex">
            <span>Ruby</span>
            <span>Rails</span>
            <span>SQL</span>
            <span>Golang</span>
            <span>AWS</span>
            <span>Postgresql</span>
            <span>Open API Design</span>
            <span>Heroku</span>
          </div>
          <h3>Certifications</h3>
        </div>
        <div>
          <img src={profileImage} alt="something" className="skills__img"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
