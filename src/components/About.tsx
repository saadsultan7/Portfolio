import React from 'react';
import MagneticText from '../utils/MagneticText';

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
          <h3 className="know-me"  style={window.innerWidth < 768 ? { textAlign: 'center' } : {}} data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="100">
            Get to know me
          </h3>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="100">
            I'm a <b>Software Developer</b> with a passion for crafting web and mobile
            applications that drive the success of products. You can explore
            some of my work in the Projects section.
          </p>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="10">
            I also enjoy sharing valuable content related to the knowledge I've
            gained throughout my journey in Web and Mobile App development, both in
            <b>WEB APP</b> and <b>Mobile APP</b>. Feel free to connect or follow me on
            my
            <a href="https://www.linkedin.com/in/saad-sultan-25a323298/ ">
              <b> LinkedIn </b>
            </a>
            , where I share insightful content on Web and Mobile app development and
            programming.
          </p>
          <p className="know-me" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-delay="10">
            I'm actively working as a software developer, seeking opportunities where I can make meaningful
            contributions, continue learning, and advance my skills. If you have
            a great opportunity that aligns with my expertise and experience,
            please don't hesitate to reach out.
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

