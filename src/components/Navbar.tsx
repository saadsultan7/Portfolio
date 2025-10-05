import React, { useState, useEffect, useRef } from 'react';
import cocosignLogo from '../assets/cover.png';
import 'boxicons/css/boxicons.min.css';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === menuButtonRef.current) return;
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
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
        <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar} ref={menuButtonRef}></i>
        <span className="logo navLogo logo-with-line">
          <a href="/#" onClick={closeSidebar}><img src={cocosignLogo} alt="Logo" /></a>
        </span>

        <div className="menu" ref={sidebarRef}>
          <div className="logo-toggle">
            <span className="logo logo-with-line"><a href="#Home" onClick={closeSidebar}><img src={cocosignLogo} alt="Logo" /></a></span>
            {/* <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i> */}
          </div>

          <ul className="nav-links logo-with-lin">
            <li><a href="#" onClick={closeSidebar}>Home</a></li>
            <li><a href="#About" onClick={closeSidebar}>About</a></li>
            <li><a href="#Projects" onClick={closeSidebar}>Projects</a></li>
            <li><a href="#Contact" onClick={closeSidebar}>Contact</a></li>
          </ul>
        </div>

          <div className={`searchToggle ${isSearchActive ? 'active' : ''}`} onClick={toggleSearch}>

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