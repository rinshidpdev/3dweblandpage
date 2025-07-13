import React, { useState } from 'react';
import Hamburger from 'hamburger-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Desktop Navbar */}
      <div className="navbar-desktop">
        <div className="navbar-left">
          <div className="navbar-logo"> <img src='' alt="" /></div>
         
        </div>
        <div className="navbar-actions">
          <div className="phone-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="menu-toggle">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Hamburger (Close) Icon inside Mobile Menu */}
          <div className="menu-close">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" size={30} />
          </div>

          {/* Main Navigation Links (Inline Layout) */}
          <nav className="mobile-nav">
            <a href="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" className="nav-item" onClick={() => setIsOpen(false)}>About</a>
            <a href="/services" className="nav-item" onClick={() => setIsOpen(false)}>Services</a>
            <a href="/work" className="nav-item highlight" onClick={() => setIsOpen(false)}>Work</a>
            <a href="/blog" className="nav-item" onClick={() => setIsOpen(false)}>Think</a>
            <a href="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>

          {/* Footer */}
          <div className="mobile-footer">
            <div className="footer-section">
              <h3 className="footer-heading">Meet Us</h3>
              <p className="footer-text">Latifa Towers</p>
              <p className="footer-text">34th Floor, Office 3401</p>
              <p className="footer-text">Sheikh Zayed Road, Dubai</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <p className="footer-text">hello@rinshid</p>
              <p className="footer-text">988 696733</p>
              <p className="footer-text">7889 9856</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-heading">Reach Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* RESET & BASE STYLES */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        .navbar-logo img{
        width:170px;
        }
        .navbar-container {
          width: 100%;
          position: relative;
        }
        /* DESKTOP NAVBAR */
        .navbar-desktop {
          background-color: black;
          color: white;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .phone-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid white;
        }
        .icon {
          width: 20px;
          height: 20px;
          color: white;
        }
        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          display: block;
        }
        /* DESKTOP INLINE NAV */
        .desktop-nav {
          display: flex;
          gap: 32px;
        }
        .desktop-nav a {
          font-size: 18px;
          transition: color 0.3s;
        }
        .desktop-nav a:hover {
          color: #ffffffcc;
        }
        .desktop-nav a.highlight {
          color: #b4ff00;
        }
        .desktop-nav a.highlight:hover {
          color: #ccff33;
        }
        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: black;
          color: white;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
          overflow-y: auto;
        }
        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-menu-content {
          position: relative;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .menu-close {
          position: absolute;
          top: 16px;
          right: 16px;
        }
        /* MOBILE NAV: INLINE LAYOUT */
        .mobile-nav {
          margin-top: 80px;
          margin-bottom: auto;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nav-item {
          font-size: 36px;
          font-weight: 300;
          transition: color 0.3s;
        }
        .nav-item:hover {
          color: #d85a7f;
        }
        .nav-item.highlight {
          color: #b4ff00;
        }
        .nav-item.highlight:hover {
          color: #ccff33;
        }
        /* MOBILE FOOTER */
        .mobile-footer {
          margin-top: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .mobile-footer {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .footer-section {
          margin-bottom: 24px;
          text-align: center;
        }
        .footer-heading {
          font-size: 20px;
          margin-bottom: 16px;
        }
        .footer-text {
          color: #a0a0a0;
          margin-bottom: 4px;
        }
        .social-icons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .social-icon {
          display: flex;
          transition: color 0.3s;
        }
        .social-icon:hover {
          color: #d85a7f;
        }
        /* RESPONSIVE RULES */
        @media (max-width: 768px) {
          .navbar-desktop {
            padding: 12px 16px;
            
          }
          .navbar-logo img {
            width: 130px;
            margin-left:0;
          }
          .phone-icon {
            width: 35px;
            height: 35px;
          }
          .icon {
            width: 18px;
            height: 18px;
          }
          .nav-item {
            font-size: 28px;
          }
          .footer-heading {
            font-size: 18px;
          }
          .footer-text {
            font-size: 14px;
          }
        }
        /* Remove default shadow/outlines on hamburger */
        :global(.hamburger-react) {
          box-shadow: none !important;
          outline: none !important;
        }
        :global(.hamburger-react button) {
          box-shadow: none !important;
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default Navbar;





