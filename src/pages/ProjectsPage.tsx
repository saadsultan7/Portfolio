import React from 'react';
// import MobileItem from '..components/MobileItem';
import { lazy } from 'react';
const Contact = lazy(() => import("../components/Contact"));
const Navbar = lazy(() => import("../components/Navbar"));
import MobileItem from '../components/MobileItem';
import WebItem from '../components/WebItem';
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
import fyp1 from '../assets/fyp1.jpg';
import fyp2 from '../assets/fyp2.jpg';
import fyp3 from '../assets/fyp3.jpg';
import fyp4 from '../assets/fyp4.jpg';
import fyp5 from '../assets/fyp5.jpg';
import fyp6 from '../assets/fyp6.jpg';
import fyp7 from '../assets/fyp7.jpg';
import PAB from '../assets/PAB.jpg';
import PAB1 from '../assets/PAB1.jpg';
import PAB2 from '../assets/PAB2.jpg';  
import PAB3 from '../assets/PAB3.jpg';
import PAB4 from '../assets/PAB4.jpg';
import Umrah from '../assets/Umrah.jpg';
import Umrah2 from '../assets/Umrah2.jpg';
import Umrah3 from '../assets/Umrah3.jpg';
import Umrah4 from '../assets/Umrah4.jpg';
import Umrah5 from '../assets/Umrah5.jpg';
import Umrah6 from '../assets/Umrah6.jpg';
import hifz from '../assets/hifz.jpg';
import hifz2 from '../assets/hifz2.jpg';
import hifz3 from '../assets/hifz3.jpg';
import hifz4 from '../assets/hifz4.jpg';
import hifz5 from '../assets/hifz5.jpg';
import hifz6 from '../assets/hifz6.jpg';
import hifz7 from '../assets/hifz7.jpg';

const ProjectsPage: React.FC = () => {

  return (
    <>
    <Navbar />
    <section style={{marginTop:40}} id="Projects">
      <div className="project-section">
        <h1 data-aos="fade-up">
          Projects
        </h1>
        <p data-aos="fadfe-up">

            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
        </p>

        <MobileItem
          title={"Noor Shop"}
          description={
              "I am building an e-commerce app using React-Native. In this application, I am using Navigation Libraries, Redux, UI Libraries, Fetch API, Animations, Payment integration, and many more things. It's not completed yet but I am on it and will complete it in less than a week or two."
           }
          imageSrcs={[noorImage1, noorImage2, noorImage3]}
        />
        <WebItem
          id='hifz'
          title={"HIFZ"}
          description={
            "This is a web application for a company called PAB. PAB is a company that provides services to restaurants. This application is used by the restaurant to manage their orders, manage their employees, manage their inventory, and many more. It is built using ReactJS, NodeJS, ExpressJS, MongoDB, and Redux."
          }
          imageSrcs={[hifz ,hifz2, hifz3, hifz4, hifz5, hifz6, hifz7]}
          reverse
          link="https://hifztrackerui.onrender.com/"
          />
        <MobileItem
          title={"Food Recipe"}
          description={
              "I have built a Food Recipe app using react native. In this application I integrated the API of themealdb.com. There are a total of three screens in this application welcome, home, and details. I have used react navigation for navigation and React Native Reanimated for the animation."
            
          }
          imageSrcs={[foodImage1, foodImage2, foodImage3]}
        />
         <WebItem
          id='fyp'
          title={"Final Year Project"}
          description={
              "This is a web application for a company called PAB. PAB is a company that provides services to restaurants. This application is used by the restaurant to manage their orders, manage their employees, manage their inventory, and many more. It is built using ReactJS, NodeJS, ExpressJS, MongoDB, and Redux."
          }
          imageSrcs={[fyp1,fyp2,fyp3,fyp4,fyp5,fyp6,fyp7]}
          reverse
          
          />
        <MobileItem
          title={'Chatz'}
          description={
              "It is a messaging app almost like WhatsApp. For the backend, I used Firebase to store user data and messages. I also used Google verification instead of phone numbers or you can also use email for signup. To store the data of users in their phone internal storage I used My SQL."
          }
          imageSrcs={[chatImage1, chatImage2, chatImage3]}
        />
        <WebItem
          id='pab'
          title={"PAB"}
          description={
            "This is a web application for a company called PAB. PAB is a company that provides services to restaurants. This application is used by the restaurant to manage their orders, manage their employees, manage their inventory, and many more. It is built using ReactJS, NodeJS, ExpressJS, MongoDB, and Redux."
          }
          imageSrcs={[PAB,PAB1,PAB2,PAB3,PAB4]}
          reverse
          link="https://www.pabsmartprep.com/"
          />
        <MobileItem
          title={"Parchi"}
          description={
              "This is a Point Of Sale application for different types of vendors. Developed on react-native the backend was developed in python django and the database used is postgresql. For state management I used Redux. It has bluetooth printer integration, camera integration, and many more."
          }
          imageSrcs={[parchi1, parchi2, parchi3, parchi4]}
          // reverse
        />
       
        <WebItem
          id='umrah'
          title={"Umrah Portal"}
          description={
            "This is a web application for a company called PAB. PAB is a company that provides services to restaurants. This application is used by the restaurant to manage their orders, manage their employees, manage their inventory, and many more. It is built using ReactJS, NodeJS, ExpressJS, MongoDB, and Redux."
          }
          imageSrcs={[Umrah, Umrah2, Umrah3, Umrah4, Umrah5, Umrah6]}
          reverse
          link="https://www.group2travel.com/"
          />
      </div>
    </section>
    <Contact />
    </>
  );
};

export default ProjectsPage;