import React from 'react';
import MobileItem from './MobileItem';
import './Projects.css';
import WebItem from './WebItem';
import noorImage1 from '../assets/s21.jpg';
import noorImage2 from '../assets/s22.jpg';
import noorImage3 from '../assets/s23.jpg';
import foodImage1 from '../assets/food1.jpg';
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';
import hifz from '../assets/hifz.jpg';
import hifz2 from '../assets/hifz2.jpg';
import hifz3 from '../assets/hifz3.jpg';
import hifz4 from '../assets/hifz4.jpg';
import hifz5 from '../assets/hifz5.jpg';
import hifz6 from '../assets/hifz6.jpg';
import hifz7 from '../assets/hifz7.jpg';
import valve1 from '../assets/valve1.jpg'
import valve2 from '../assets/valve2.jpg'
import valve3 from '../assets/valve3.jpg'
import valve4 from '../assets/valve4.jpg'
import valve5 from '../assets/valve5.jpg'
import valve6 from '../assets/valve6.jpg'
import valve7 from '../assets/valve7.jpg'

import { Button } from './ui/button';
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="Projects">
      <center>
        <hr data-aos="zoom-in" />
      </center>
      <div className="project-section">
        <h1 data-aos="fade-up">
          Projects
        </h1>
        <p data-aos="fade-up">

          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study.
        </p>

        <MobileItem
          title={"Noor Shop"}
          description={`Cross-platform mobile app (iOS & Android)
          JWT authentication with secure token storage

          Product browsing with search, filters, and category navigation

          Product variations: size, color, quantity selection

          Cart management and Stripe payment integration

          Order history and push notifications

          Frontend built solo with React Native CLI and Redux Toolkit

          Optimized performance: FlatList pagination, minimal animations, backend WebP images`
          }
          imageSrcs={[noorImage1, noorImage2, noorImage3]}
        />

        <WebItem
          id='Valve'
          title={"Valve Management System"}
          description={
            `Comprehensive Industrial Asset & Maintenance Management App.
Tracks industrial assets such as valves, heat exchangers, and motors.
Manages contractors and subcontractors with structured assignment flows.
Supports classification and tracking of valve types, work areas, and scopes of work.
Includes a dedicated supervisor module for oversight and approvals.
Provides real-time progress tracking for all maintenance and project activities.
Generates multiple report types: status reports, on-hold reports, descope reports, and detailed performance reports.
Streamlines workflow, documentation, and coordination across industrial projects.
Ensures full visibility, accountability, and traceability of all maintenance operations.`
          }
          imageSrcs={[valve1, valve2, valve3, valve4, valve5, valve6, valve7]}
          reverse
          link="https://satorp.tagntech.com/"
        />

        <MobileItem
          title={"Food Recipe"}
          description={
            `Mobile app built with React Native (iOS & Android)

Integrated TheMealDB API for recipes

Screens: Welcome, Home, and Recipe Details

Navigation handled with React Navigation

Animations implemented using React Native Reanimated

Lightweight and responsive UI for smooth performance`

          }
          imageSrcs={[foodImage1, foodImage2, foodImage3]}
        />

        <WebItem
          id='hifz'
          title={"HIFZ Tracking "}
          description={
            `Web application for tracking Hifz progress and managing students

Features include assignments, attendance, messaging, and notice board

Voice transfer feature for submitting recitations (stored with SWR-3)

Admin panel for managing students, teachers, and content

Frontend built with React; backend provided in Node.js

Real-time notifications and updates`
          }
          imageSrcs={[hifz, hifz2, hifz3, hifz4, hifz5, hifz6, hifz7]}
          reverse
          link="https://hifztrackerui.onrender.com/"
        />

        <Button onClick={() => navigate("/projects")} > View More </Button>
      </div>
    </section>
  );
};

export default Projects;
