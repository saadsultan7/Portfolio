import React from 'react';
import MobileItem from './MobileItem';
import chatImage2 from '../assets/s0.jpg';
import parchi1 from '../assets/parchi1.jpg';
import parchi2 from '../assets/parchi2.jpg';
import parchi3 from '../assets/parchi3.jpg';
import parchi4 from '../assets/parchi4.jpg';
import chatImage3 from '../assets/s11.jpg';
import noorImage1 from '../assets/s21.jpg';
import noorImage2 from '../assets/s22.jpg';
import noorImage3 from '../assets/s23.jpg';
import chatImage1 from '../assets/s24.jpg';
import foodImage1 from '../assets/food1.jpg';
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';
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
          reverse
        />

        <MobileItem
          title={'Chatz'}
          description={
            `Mobile messaging app similar to WhatsApp

Backend powered by Firebase for storing users and messages

Signup via Google verification or email

Local user data storage implemented with MySQL

Built with React Native for smooth, cross-platform performance`
          }
          imageSrcs={[chatImage1, chatImage2, chatImage3]}
        />

        <MobileItem
          title={"Parchi"}
          description={
            `Point of Sale application for multiple types of vendors

Frontend built with React Native; backend in Python Django; PostgreSQL database

State management with Redux

Features include Bluetooth printer integration, camera integration, and more

Optimized for smooth performance on mobile devices`
          }
          imageSrcs={[parchi1, parchi2, parchi3, parchi4]}
          reverse
        />
        <Button onClick={() => navigate("/projects")} > View More </Button>
      </div>
    </section>
  );
};

export default Projects;