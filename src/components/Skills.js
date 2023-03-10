import skillsImage from '../images/skillsImage.png'
import webDevCert from '../images/webDevCert.pdf'
import golangCert from '../images/golangCert.pdf'
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
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">Javascript</span>
              <span className="skill" >React</span>
              <span className="skill">Bootstrap</span>
              <span className="skill">Figma</span>
              <span className="skill">Responsive Design</span>
            </div>
          <h3>Back End</h3>
          <div className="skill-val-flex">
            <span className="skill">Ruby</span>
            <span className="skill">Rails</span>
            <span className="skill">SQL</span>
            <span className="skill">Golang</span>
            <span className="skill">AWS</span>
            <span className="skill">Postgresql</span>
            <span className="skill">Open API Design</span>
            <span className="skill">Heroku</span>
          </div>
          <h3>Certifications</h3>
          <div className="skill-val-flex">
            <span className="skill"><a href={webDevCert} download>Web Development</a></span>
            <span className="skill"><a href="something">AWS</a></span>
            <span className="skill"><a href={golangCert} download>Golang</a></span>
          </div>
        </div>
        <div>
          <img src={skillsImage} alt="woman working on laptop" className="skills__img"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
