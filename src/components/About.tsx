import React from 'react';
import MagneticText from '../utils/MagneticText';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="About">
      <div className="about-me" data-aos="fade-up" data-aos-delay="200" data-aos-offset="250">
        <h1>About Me</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="container-1">
        <div>
          <h3 className="know-me" style={window.innerWidth < 768 ? { textAlign: 'center' } : {}} data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="100">
            Get to know me
          </h3>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="100">
            I’m a <b>Software Developer</b> driven by the challenge of crafting impactful web and mobile applications that solve real-world problems and elevate user experiences. Explore my Projects to see what I’ve been working on.



          </p>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="10">
            I actively share practical insights and lessons learned from my experience in <b>WEB APP</b> and <b>Mobile APP</b> Development. Connect with me on <a href="https://www.linkedin.com/in/saad-sultan-25a323298/ ">
              <b> LinkedIn </b>
            </a>to stay updated on my latest posts about development and programming.

          </p>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="10">
            I’m currently working as a Software Developer, open to collaborations and opportunities that let me create value, sharpen my skills, and grow further. If you’re looking for someone who can contribute to your team’s success, let’s connect.
          </p>
        </div>
        <div>
          <h3 className="my-skills" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="10">
            <MagneticText>My Skills</MagneticText>
          </h3>
          <div className="skills">
            {['React Native', 'React', 'Firebase', 'JavaScript', 'C++', 'ANDROID STUDIO', 'Python', 'My SQL', 'REDUX', 'Django', 'Git Hub', 'Git'].map((skill, index) => (
              <div key={index} className="skills_skill" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="300">
                <MagneticText>{skill}</MagneticText>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;

