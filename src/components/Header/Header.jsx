import React, { useEffect, useState } from 'react'
import "./Header.css"
import logo from "./logo.gif"
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="header-div1">
        <NavLink to="/Blogs" onClick={closeMenu}>
          <img className='header-img' src={logo} alt="logo"/>
        </NavLink>
      </div>
      
      <div className={`hamburger ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`header-div2 ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-div2-links">
          <NavLink 
            to="/Blogs/" 
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Blogs
          </NavLink>
          <NavLink 
            to="/Blogs/about" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About
          </NavLink>
          <NavLink 
            to="/Blogs/newsletter" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Newsletter
          </NavLink>
          <a 
            href="https://deepnav4.github.io/Portfolio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu}
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  )
}
