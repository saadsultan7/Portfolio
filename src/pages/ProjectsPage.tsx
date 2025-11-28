import React from 'react';
// import MobileItem from '..components/MobileItem';
import { lazy } from 'react';
const Contact = lazy(() => import("../components/Contact"));
const Navbar = lazy(() => import("../components/Navbar"));
import MobileItem from '../components/MobileItem';
import WebItem from '../components/WebItem';
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
import fyp1 from '../assets/fyp1.jpg';
import fyp2 from '../assets/fyp2.jpg';
import fyp3 from '../assets/fyp3.jpg';
import fyp4 from '../assets/fyp4.jpg';
import fyp5 from '../assets/fyp5.jpg';
import fyp6 from '../assets/fyp6.jpg';
import fyp7 from '../assets/fyp7.jpg';
import PAB from '../assets/PAB.jpg';
import PAB1 from '../assets/PAB1.jpg';
import PAB2 from '../assets/PAB2.jpg';  
import PAB3 from '../assets/PAB3.jpg';
import PAB4 from '../assets/PAB4.jpg';
import Umrah from '../assets/Umrah.jpg';
import Umrah2 from '../assets/Umrah2.jpg';
import Umrah3 from '../assets/Umrah3.jpg';
import Umrah4 from '../assets/Umrah4.jpg';
import Umrah5 from '../assets/Umrah5.jpg';
import Umrah6 from '../assets/Umrah6.jpg';
import hifz from '../assets/hifz.jpg';
import hifz2 from '../assets/hifz2.jpg';
import hifz3 from '../assets/hifz3.jpg';
import hifz4 from '../assets/hifz4.jpg';
import hifz5 from '../assets/hifz5.jpg';
import hifz6 from '../assets/hifz6.jpg';
import hifz7 from '../assets/hifz7.jpg';

const ProjectsPage: React.FC = () => {

  return (
    <>
    <Navbar />
    <section style={{marginTop:60}} id="Projects">
      <div className="project-section">
        <h1 data-aos="fade-up">
          Projects
        </h1>
        <p data-aos="fadfe-up">

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
          imageSrcs={[hifz ,hifz2, hifz3, hifz4, hifz5, hifz6, hifz7]}
          reverse
          link="https://hifztrackerui.onrender.com/"
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
          id='fyp'
          title={"Final Year Project"}
          description={
              `Final Year Project built on MERN Stack (MongoDB, Express, React, Node.js)

Real-time messaging using WebSockets

Stripe payment integration for services

Teacher profiles and student posts

Admin panel for managing users and content

Advanced filter system: find the best teacher or job efficiently

Designed for smooth UX and responsive performance`
          }
          imageSrcs={[fyp1,fyp2,fyp3,fyp4,fyp5,fyp6,fyp7]}
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
        <WebItem
          id='pab'
          title={"PAB"}
          description={
`Platform for anesthesiology students to prepare for board exams

Over 1,000+ questions with multiple question types and progress tracking

Mock tests and performance analytics

Subscription-based with free trial; payments via Zoho

Authentication: JWT tokens, Google & Apple login

Frontend state managed with Redux

Responsive and intuitive UI for seamless exam preparation`
          }
          imageSrcs={[PAB,PAB1,PAB2,PAB3,PAB4]}
          reverse
          link="https://www.pabsmartprep.com/"
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
          // reverse
        />
       
        <WebItem
          id='umrah'
          title={"Umrah Portal"}
          description={
            `SaaS platform for travel agencies to manage customers, packages, and bookings

Handles visa processing, flight & hotel arrangements, payment tracking, and customer communication

Multi-user roles: Admin and Agent

Analytics dashboards and automated notifications for better workflow

Built as a complete web application with a focus on efficiency and usability`
          }
          imageSrcs={[Umrah, Umrah2, Umrah3, Umrah4, Umrah5, Umrah6]}
          reverse
          link="https://www.group2travel.com/"
          />
      </div>
    </section>
    <Contact />
    </>
  );
};

export default ProjectsPage;