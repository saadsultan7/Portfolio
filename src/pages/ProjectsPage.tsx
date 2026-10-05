import { lazy } from 'react';
import '../components/Projects.css';
import MobileItem from '../components/MobileItem';
import WebItem from '../components/WebItem';
import { projects } from '../data/projectsData';

const Contact = lazy(() => import('../components/Contact'));
const Navbar = lazy(() => import('../components/Navbar'));

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section style={{ marginTop: 60 }} id="Projects">
        <div className="project-section">
          <h1 data-aos="fade-up">Projects</h1>
          <p data-aos="fade-up">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </p>

          {projects.map((project) =>
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
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ProjectsPage;
