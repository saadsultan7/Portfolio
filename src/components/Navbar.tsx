import React, { useState, useEffect } from 'react';
import cocosignLogo from '../assets/cover.png';
import 'boxicons/css/boxicons.min.css';
import MagneticText from './MagneticText';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light-mode') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'light-mode' : 'dark-mode');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  // New function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={isSidebarOpen ? 'active' : ''}>
      <div className="nav-bar">
        <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>
        <span className="logo navLogo logo-with-line">
          <a href="#Home" onClick={closeSidebar}><img src={cocosignLogo} alt="Logo" /></a>
        </span>

        <div className="menu">
          <div className="logo-toggle">
            <span className="logo logo-with-line"><a href="#Home" onClick={closeSidebar}><img src={cocosignLogo} alt="Logo" /></a></span>
            <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><a href="#Home" onClick={closeSidebar}><MagneticText>Home</MagneticText></a></li>
            <li><a href="#About" onClick={closeSidebar}><MagneticText>About</MagneticText></a></li>
            <li><a href="#Projects" onClick={closeSidebar}><MagneticText>Projects</MagneticText></a></li>
            <li><a href="#Contact" onClick={closeSidebar}><MagneticText>Contact</MagneticText></a></li>
          </ul>
        </div>

          <div className={`searchToggle ${isSearchActive ? 'active' : ''}`} onClick={toggleSearch}>
            {/* <i className="bx bx-x cancel"></i>
            <i className="bx bx-search search"></i> */}
          </div>

          <div className="darkLight-searchBox">
          <div className={`dark-light ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
            <i className="bx bx-moon moon"></i>
            <i className="bx bx-sun sun"></i>
          </div>

          <div className="searchBox">
            <div className="search-field">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;