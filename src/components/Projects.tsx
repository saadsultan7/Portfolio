import React from 'react';
import ProjectItem from './ProjectItem';
import chatImage2 from '../assets/s0.jpg';
import parchi1 from '../assets/parchi1.jpg';
import parchi2 from '../assets/parchi2.jpg';
import parchi3 from '../assets/parchi3.jpg';
import parchi4 from '../assets/parchi4.jpg';
import chatImage3 from '../assets/s11.jpg';
import noorImage1 from '../assets/s21.jpg';
import noorImage2 from '../assets/s22.jpg';
import noorImage3 from '../assets/s23.jpg';
import chatImage1 from '../assets/s24.jpg';
import foodImage1 from '../assets/food1.jpg';
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';

const Projects: React.FC = () => {
  return (
    <section id="Projects">
      <center>
        <hr data-aos="zoom-in" />
      </center>
      <div className="project-section">
        <h1 data-aos="fade-up">
          Projects
        </h1>
        <p data-aos="fade-up">

            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
        </p>

        <ProjectItem
          title={"Noor Shop"}
          description={
              "I am building an e-commerce app using React-Native. In this application, I am using Navigation Libraries, Redux, UI Libraries, Fetch API, Animations, Payment integration, and many more things. It's not completed yet but I am on it and will complete it in less than a week or two."
           }
          imageSrcs={[noorImage1, noorImage2, noorImage3]}
        />

        <ProjectItem
          title={"Food Recipe"}
          description={
              "I have built a Food Recipe app using react native. In this application I integrated the API of themealdb.com. There are a total of three screens in this application welcome, home, and details. I have used react navigation for navigation and React Native Reanimated for the animation."
            
          }
          imageSrcs={[foodImage1, foodImage2, foodImage3]}
          reverse
        />

        <ProjectItem
          title={'Chatz'}
          description={
              "It is a messaging app almost like WhatsApp. For the backend, I used Firebase to store user data and messages. I also used Google verification instead of phone numbers or you can also use email for signup. To store the data of users in their phone internal storage I used My SQL."
          }
          imageSrcs={[chatImage1, chatImage2, chatImage3]}
        />

        <ProjectItem
          title={"Parchi"}
          description={
              "This is a Point Of Sale application for different types of vendors. Developed on react-native the backend was developed in python django and the database used is postgresql. For state management I used Redux. It has bluetooth printer integration, camera integration, and many more."
          }
          imageSrcs={[parchi1, parchi2, parchi3, parchi4]}
          reverse
        />
      </div>
    </section>
  );
};

export default Projects;

