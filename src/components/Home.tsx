import React , {Fragment} from 'react';
import MagneticText from '../utils/MagneticText';
import mainImage from '../assets/main.jpg';
import { Button } from './ui/button';
const Home: React.FC = () => {
  const text = "I’m a dedicated React and React Native Developer with over 2 years of hands-on experience. I help businesses and startups turn their ideas into powerful, responsive, and user-friendly mobile and web applications.";
  
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
        ? (<h3>{text}</h3  >):
        
        <h3>
          {text.split('').map((char, index) => (
            <Fragment key={index}>
            {char === ' ' ? (
              <span style={{ display: 'inline-block', marginRight: '10px' }}> </span>
              ) : (
                <MagneticText repel={true}>
                  {char}
                </MagneticText>
              )}
            </Fragment>
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

