import aboutImage from '../images/aboutImage.jpg'
import './About.css'
const About = () => {
  return (
    <div className="about-section section" id="about">
      <h3 className="section__heading">About</h3>
      <hr className="section__underline"></hr>
      <div className="about-flex">
        <div className="about__text">
          <p>I recently decided to change careers into Software Development after teaching myself to code during the Covid lockdowns. Prior to this, I was working in tech within Sales/Customer success roles and was always fascinated learning about what the engineers did and the different projects they worked on.</p>
          <p>I completed a Web Development bootcamp in 2022 where I learned technical skills such as Ruby on Rails, SQL, HTML, CSS, Javascript, and Bootstrap while building applications for the web. I thoroughly enjoyed the challenge of learning complex topics and being able to apply these skills to build projects with team members.</p>
          <p>I am a naturally curious person and love to learn new things, and am excited to grow my skills and continue my career journey in Software Development.</p>
          <p>Outside the world of coding I enjoy staying active by riding my bike and practicing yoga, travel, reading, cooking and good coffee.</p>
          <a href="resume" className="resume__btn">Resume</a>
        </div>
        <div>
          <img src={aboutImage} alt="Ellie Stevens" className="about__img"/>
        </div>
      </div>
    </div>
   );
}

export default About;
