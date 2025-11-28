import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
    const experiences = [
        {
            date: "Feb 2025 - Present",
            role: "Full Time React & React Native Dev",
            company: "Saudi Arabia Software House (Remote)",
            projects: ["Hifz Tracking", "Umrah Portal"],
            description: "Working remotely as a full-time developer, focusing on building scalable web and mobile applications for international clients."
        },
        {
            date: "June 2024 - Jan 2025",
            role: "Intern React & React Native Dev",
            company: "MAAQ Services",
            projects: ["PABSmart", "Parchi"],
            description: "Gained hands-on experience in a professional environment, contributing to key projects and enhancing skills in React ecosystem."
        },
        {
            date: "June 2023 - May 2024",
            role: "Freelancer",
            company: "Self-Employed",
            projects: ["Partner App", "Ecommerce", "Chatz", "Food Recipe Mob Apps"],
            description: "Started my journey as a freelancer, delivering various mobile and web solutions for diverse clients."
        }
    ];

    return (
        <section id="Experience">
            <div className="experience-section" data-aos="fade-up">
                <h1 data-aos="fade-up">Experience</h1>
                <p data-aos="fade-up">
                    My professional journey and the roles I've held.
                </p>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="experience-date">{exp.date}</div>
                            <div className="experience-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p className="experience-desc">{exp.description}</p>
                                <div className="experience-projects">
                                    <strong>Projects:</strong> {exp.projects.join(", ")}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
