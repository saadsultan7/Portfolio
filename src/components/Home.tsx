import React from 'react';
import mainImage from '../assets/main.jpg';

const Home: React.FC = () => {
  return (
    <section id="Home">
      <div className="home" data-aos="fade-right">
        <div className="image-container" style={{backgroundImage: `url(${mainImage})`}}></div>
        <h1>HEY, I'M <b>SAAD</b> SULTAN</h1>
        <br />
        <h3>
          A dedicated React Native Developer with a year of hands-on
          experience. I'm here to help you bring your digital ideas to life and
          create responsive, user-friendly solutions.
        </h3>
        
        <br /><br /><br />
        <a href="#Projects" id="btn-project">
          <span className='ripple'/>
          <div>Projects</div>
        </a>
      
      </div>
      <center>
    <hr data-aos="zoom-in" />
  </center>
    </section>
  );
};

export default Home;

