import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="Contact">
      <h2 data-aos="fade-down" data-aos-duration="2000">
        Connect with me
      </h2>
      <ul data-aos="fade-in" data-aos-duration="2000">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/saadsultan7" aria-label="GitHub profile">
            GitHub
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/saad-sultan-25a323298/" aria-label="LinkedIn profile">
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/itachi78900?s=08" aria-label="Twitter profile">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SaadSultan.50000MW?mibextid=ZbWKwL" aria-label="Facebook profile">
            Facebook
          </a>
        </li>
      </ul>
      <h3 className="mail" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="50">
        Shoot me a mail at{' '}
        <a style={{ color: '#006741ff' }} href="mailto:saadsultan4004@gmail.com">
          saadsultan4004@gmail.com
        </a>
      </h3>

      <h4 className="copy-right">Copyright &copy; 2024 Saad Sultan</h4>
    </section>
  );
};

export default Contact;
