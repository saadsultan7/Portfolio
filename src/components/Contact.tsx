import React from 'react';
const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <h2 data-aos="fade-down" data-aos-duration="2000">
        Connect with me
      </h2>
      <ul data-aos="fade-in" data-aos-duration="2000">
        <li><a href="https://github.com/saadsultan7">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/saad-sultan-25a323298/">LinkedIn</a></li>
        <li><a href="https://x.com/itachi78900?s=08">Twitter</a></li>
        <li><a href="https://www.facebook.com/SaadSultan.50000MW?mibextid=ZbWKwL">Facebook</a></li>
      </ul>
      <h3 className="mail" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="50">
        Shoot me a mail
      </h3>
      <h4 className="copy-right">
        Copyright &copy; 2024 Saad Sultan
      </h4>
    </section>
  );
};

export default Contact;

