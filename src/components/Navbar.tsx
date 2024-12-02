import React, { useState, useEffect } from 'react';
import cocosignLogo from '../assets/cocosign.png';
import 'boxicons/css/boxicons.min.css';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set initial state to true
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if there's a saved mode preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light-mode') {
      setIsDarkMode(false);
    } else {
      // If no preference or it's set to 'dark-mode', use dark mode
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []); // Empty dependency array ensures this runs only once on mount

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

  return (
    <nav className={isSidebarOpen ? 'active' : ''}>
      <div className="nav-bar">
        <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>
        <span className="logo navLogo">
          <a href="#Home"><img src={cocosignLogo} alt="Logo" /></a>
        </span>

        <div className="menu">
          <div className="logo-toggle">
            <span className="logo"><a href="#Home"><img src={cocosignLogo} alt="Logo" /></a></span>
            <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className="darkLight-searchBox">
          <div className={`dark-light ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
            <i className="bx bx-moon moon"></i>
            <i className="bx bx-sun sun"></i>
          </div>

          <div className={`searchToggle ${isSearchActive ? 'active' : ''}`} onClick={toggleSearch}>
            <i className="bx bx-x cancel"></i>
            <i className="bx bx-search search"></i>
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

