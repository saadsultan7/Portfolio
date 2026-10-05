import MobileItem from './MobileItem';
import './Projects.css';
import WebItem from './WebItem';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { featuredProjects } from '../data/projectsData';

const Projects: React.FC = () => {
  const navigate = useNavigate();

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

        {featuredProjects.map((project) =>
          project.type === 'mobile' ? (
            <MobileItem
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrcs={project.imageSrcs}
              reverse={project.reverse}
            />
          ) : (
            <WebItem
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrcs={project.imageSrcs}
              reverse={project.reverse}
              link={project.link}
            />
          )
        )}

        <Button onClick={() => navigate('/projects')}>View More</Button>
      </div>
    </section>
  );
};

export default Projects;
