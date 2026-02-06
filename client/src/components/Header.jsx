import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import khantfilmsLogo from '../images/khantfilms.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src={khantfilmsLogo} 
            alt="Jewelry Photographer & Watch Photographer"
          />
        </Link>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/jewelry-photographer" className="nav-link">JEWELRY</Link>
          <Link to="/watch-photographer" className="nav-link">WATCHES</Link>
          <Link to="/on-figure" className="nav-link">ON FIGURE</Link>
          <Link to="/jewelry-videographer-watch-videographer" className="nav-link">VIDEOGRAPHY</Link>
          <Link to="/contact-us" className="nav-link">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
