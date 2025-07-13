import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/think">Think</a></li>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <ul className="second-list">
            <li><a href="/logo-design">Logo Design Dubai</a></li>
            <li><a href="/packaging-design">Packaging Design</a></li>
            <li><a href="/brochure-design">Brochure Design</a></li>
            <li><a href="/video-production">Video Production</a></li>
            <li><a href="/pr-marketing">PR & Marketing</a></li>
            <li><a href="/brand-launch">Brand Launch</a></li>
            <li><a href="/web3">Web 3.0</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <ul className="third-list">
            <li><a href="/real-estate">Real Estate</a></li>
            <li><a href="/social-media">Social Media</a></li>
            <li><a href="/brand-naming">Brand Naming</a></li>
            <li><a href="/trademark">Trademark</a></li>
            <li><a href="/web-design">Web Design</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Latifa Towers</p>
          <p>34th Floor, Office 3401</p>
          <p>Sheikh Zayed Road, Dubai</p>
          <div className="contact-info">
            <p><span className="icon email-icon">&#9993;</span> hello@runshid</p>
            <p><span className="icon phone-icon" style={{backgroundColor:'white'}}>&#128222;</span> 47448844</p>
            <p><span className="icon whatsapp-icon">&#128172;</span> 9944 9856</p>
          </div>
        </div>

        <div className="footer-section social-section">
          <h3>Reach Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#" className="social-icon instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="social-icon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="social-icon youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="#" className="social-icon tiktok">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025  All Rights Reserved.</p>
        <p>awesome moments start from here</p>
      </div>
    </div>
  );
};

// CSS for the component
const styles = `
.footer-container {
  background-color: #000000;
  color: #ffffff;
  padding: 60px 20px 20px;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.footer-section {
  margin-right: 20px;
  margin-bottom: 20px;
}

.footer-section h3 {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #888888;
  text-decoration: none;
  font-size: 19px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #ffffff;
}

.footer-section p {
  color: #888888;
  margin: 5px 0;
  font-size: 14px;
}

.second-list, .third-list {
  margin-top: 47px !important;  
}

.contact-info {
  margin-top: 15px;
  color:white;
}

.contact-info p {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.icon {
  margin-right: 10px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
}

.contact-section p {
  margin-bottom: 2px;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #444444;
  border-radius: 3px;
  color: #ffffff;
  font-size: 12px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #333333;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #333333;
  padding-top: 20px;
  color: #888888;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    padding: 30px 20px 15px;
  }
    .contact-info{
    margin-left: 48px;

    }
  
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
  
  .second-list, .third-list {
    margin-top: 0;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom p {
    margin-bottom: 10px;
  }
}
`;


const StyleSheet = () => {
  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
};

const FooterWithStyles = () => {
  return (
    <>
      <StyleSheet />
      <Footer />
    </>
  );
};

export default FooterWithStyles;