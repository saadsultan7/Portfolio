import React, { useState, useCallback } from 'react';
import chatImage2 from '../assets/s0.jpg';
import tikImage2 from '../assets/s1.png';
import tikImage3 from '../assets/s2.png';
import tikImage1 from '../assets/s10.jpg';
import chatImage3 from '../assets/s11.jpg';
import noorImage1 from '../assets/s21.jpg';
import noorImage2 from '../assets/s22.jpg';
import noorImage3 from '../assets/s23.jpg';
import chatImage1 from '../assets/s24.jpg';
import foodImage1 from '../assets/ss1.png';
import foodImage2 from '../assets/ss2.png';
import foodImage3 from '../assets/ss3.png';

interface ProjectItemProps {
  title: string;
  description: string;
  imageSrcs: string[];
  reverse?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageSrcs, reverse }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
  }, [imageSrcs.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageSrcs.length) % imageSrcs.length);
  }, [imageSrcs.length]);

  return (
    <div className={`project-item ${reverse ? 'reverse' : ''}`}>
      <div className="project-details">
        
        <h3 data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{title}</h3>
        <p data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{description}</p>
      </div>
      <div className="project-images" data-aos={reverse ? "fade-up-right" : "fade-up-left"}>
        <button className="slider-button prev" onClick={prevImage} aria-label="Previous image">&lt;</button>
        <div className="image-container">
          {imageSrcs.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`${title} - Image ${index + 1}`}
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                objectFit: 'contain',
                // backgroundColor:"pink"
              }}
              loading="lazy"
            />
          ))}
        </div>
        <button className="slider-button next" onClick={nextImage} aria-label="Next image">&gt;</button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="Projects">
        <center>
    <hr data-aos="zoom-in" />
  </center>
      <div className="project-section">
        <h1 data-aos="fade-up">Projects</h1>
        <p data-aos="fade-up">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study.
        </p>

        <ProjectItem
          title="Noor Shop"
          description="I am building an e-commerce app using React-Native. In this application, I am using Navigation Libraries, Redux, UI Libraries, Fetch API, Animations, Payment integration, and many more things. It's not completed yet but I am on it and will complete it in less than a week or two."
          imageSrcs={[noorImage1, noorImage2, noorImage3]}
        />

        <ProjectItem
          title="Food Recipe"
          description="I have built a Food Recipe app using react native. In this application I integrated the API of themealdb.com. There are a total of three screens in this application welcome, home, and details. I have used react navigation for navigation and React Native Reanimated for the animation."
          imageSrcs={[foodImage1, foodImage2, foodImage3]}
          reverse
        />

        <ProjectItem
          title="Chatz"
          description="It is a messaging app almost like WhatsApp. For the backend, I used Firebase to store user data and messages. I also used Google verification instead of phone numbers or you can also use email for signup. To store the data of users in their phone internal storage I used My SQL."
          imageSrcs={[chatImage1, chatImage2, chatImage3]}
        />

        <ProjectItem
          title="Tik-Tac-Toe"
          description="I have developed a Tic-Tac-Toe game in Android Studio, and it was my first project. I built it using the JAVA language. In this application, I utilized a two-dimensional array and implemented the dependency of Lottie files for animations."
          imageSrcs={[tikImage1, tikImage2, tikImage3]}
          reverse
        />
      </div>
    </section>
  );
};

export default Projects;

