import { Fragment, useState, useEffect } from 'react';
import MagneticText from '../utils/MagneticText';
import mainImage from '../assets/main.png';
import './Home.css';
import { Button } from './ui/button';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const Home: React.FC = () => {
  const text =
    "I'm a dedicated React and React Native Developer with years of hands-on experience. I help businesses and startups turn their ideas into powerful, responsive, and user-friendly mobile and web applications.";
  const isMobile = useIsMobile();

  return (
    <section id="Home">
      <div className="home" data-aos="fade-right">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>
        <h1>
          <span>HEY, I'M </span>
          {isMobile ? (
            <b>SAAD</b>
          ) : (
            <MagneticText repel={true}>
              <b>SAAD</b>
            </MagneticText>
          )}
          <span> SULTAN</span>
        </h1>
        <br />
        {isMobile ? (
          <h3>{text}</h3>
        ) : (
          <h3>
            {text.split('').map((char, index) => (
              <Fragment key={index}>
                {char === ' ' ? (
                  <span
                    style={{ display: 'inline-block', marginRight: '10px' }}
                  >
                    {' '}
                  </span>
                ) : (
                  <MagneticText repel={true}>{char}</MagneticText>
                )}
              </Fragment>
            ))}
          </h3>
        )}
        <br />
        <br />
        <br />
        <a href="#Projects">
          <Button>Projects</Button>
        </a>
      </div>
      <center>
        <hr data-aos="zoom-in" />
      </center>
    </section>
  );
};

export default Home;
