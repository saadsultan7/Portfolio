import React from 'react';
import MagneticText from './MagneticText';

const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <h2 data-aos="fade-down" data-aos-duration="2000">
        <MagneticText>Connect with me</MagneticText>
      </h2>
      <ul data-aos="fade-in" data-aos-duration="2000">
        <li><a href="https://github.com/saadsultan7"><MagneticText>GitHub</MagneticText></a></li>
        <li><a href="https://www.linkedin.com/in/saad-sultan-25a323298/"><MagneticText>LinkedIn</MagneticText></a></li>
        <li><a href="https://x.com/itachi78900?s=08"><MagneticText>Twitter</MagneticText></a></li>
        <li><a href="https://www.facebook.com/SaadSultan.50000MW?mibextid=ZbWKwL"><MagneticText>Facebook</MagneticText></a></li>
      </ul>
      <h3 className="mail" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="50">
        <MagneticText>Shoot me a mail</MagneticText>
      </h3>
      <h4 className="copy-right">
        <MagneticText>Copyright &copy; 2024 Saad Sultan</MagneticText>
      </h4>
    </section>
  );
};

export default Contact;

