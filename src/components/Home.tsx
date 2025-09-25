import React from 'react';
import MagneticText from '../utils/MagneticText';
import mainImage from '../assets/main.jpg';
import { Button } from './ui/button';
const Home: React.FC = () => {
  const text = "A dedicated React Native Developer with a year of hands-on experience. I'm here to help you bring your digital ideas to life and create responsive, user-friendly solutions.";
  
  return (
    <section id="Home">
      <div className="home" data-aos="fade-right">
        <div className="image-container" style={{backgroundImage: `url(${mainImage})`}}></div>
        <h1>
          <span>HEY, I'M </span>
          {
            window.innerWidth < 768 ? 
            <b>SAAD</b>:
            <MagneticText repel={true}><b>SAAD</b></MagneticText>
          }
          <span> SULTAN</span>
        </h1>
        <br />
        {window.innerWidth < 768
        ? (<h3>A dedicated React Native Developer with a year of hands-on experience. I'm here to help you bring your digital ideas to life and create responsive, user-friendly solutions.</h3>):
        
        <h3>
          {text.split('').map((char, index) => (
            <React.Fragment key={index}>
            {char === ' ' ? (
              <span style={{ display: 'inline-block', marginRight: '10px' }}> </span>
              ) : (
                <MagneticText repel={true}>
                  {char}
                </MagneticText>
              )}
            </React.Fragment>
          ))}
        </h3>
            }
        <br /><br /><br />
        <a href="#Projects">
        <Button>
        Projects
        </Button>
        </a>
      </div>
      <center>
        <hr data-aos="zoom-in" />
      </center>
    </section>
  );
};

export default Home;

