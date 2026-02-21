import React, { useState, useEffect, useRef } from 'react';
import saadLogoBlack from '../assets/saadlogoblack.svg';
import saadLogoGreen from '../assets/saadlogogreen.svg';
import 'boxicons/css/boxicons.min.css';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light-mode') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle active section highlighting
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'light-mode' : 'dark-mode');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      if (sectionId === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    closeSidebar();
  };

  const goToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    closeSidebar();
  };

  const navLinks = [
    { name: 'Home', id: 'Home' },
    { name: 'About', id: 'About' },
    { name: 'Experience', id: 'Experience' },
    { name: 'Projects', id: 'Projects' },
    { name: 'Contact', id: 'Contact' }
  ];

  return (
    <nav className={`${scrolled ? 'nav-scrolled' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={goToHome}>
          <img src={isDarkMode ? saadLogoGreen : saadLogoBlack} alt="SAAD Logo" />
        </div>

        <div className="nav-content">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  onClick={() => navigateToSection(link.id)}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
            </div>
            <div className="menu-toggle" onClick={toggleSidebar} ref={menuButtonRef as any}>
              <i className={isSidebarOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isSidebarOpen ? 'active' : ''}`} ref={sidebarRef}>
        <div className="mobile-menu-header">
          <div className="nav-logo" onClick={goToHome}>
            <img src={isDarkMode ? saadLogoGreen : saadLogoBlack} alt="SAAD Logo" />
          </div>
          <i className="bx bx-x close-menu" onClick={closeSidebar}></i>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                onClick={() => navigateToSection(link.id)}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
    </nav>
  );
};

export default Navbar;