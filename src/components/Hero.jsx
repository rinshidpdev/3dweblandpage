import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate values for animation
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const moveDistance = scrollProgress * window.innerWidth;
  const isScrolled = scrollY >= window.innerHeight;

  return (
    <div className="app-container">
      {/* Landing split section */}
      <div 
        id="landing" 
        style={{ 
          position: isScrolled ? 'absolute' : 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1000,
          background: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center no-repeat",
          backgroundSize: 'cover',
          backgroundColor: '#000',
          overflow: 'hidden'
        }}
      >
        <section style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          <div 
            id="side1" 
            style={{
              position: 'absolute',
              top: 0,
              left: `${-moveDistance}px`,
              width: '100%',
              height: '100%',
              clipPath: 'polygon(0 0, 0% 100%, 100% 100%)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Left side"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div 
            id="side2" 
            style={{
              position: 'absolute',
              top: 0,
              left: `${moveDistance}px`,
              width: '100%',
              height: '100%',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Right side"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </section>
      </div>

      {/* Navbar */}
      <header 
        className="navbar"
        style={{
          transform: scrollY > window.innerHeight ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <nav id="navigation-scrolling">
          <ul className="flex">
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
          </ul>
        </nav>
      </header>

      {/* Just a spacer to allow scrolling */}
      <div 
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'transparent'
        }}
      />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Roboto, sans-serif;
          overflow-x: hidden;
          background-color: #fff;
        }
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 8vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          box-shadow: 0 4px 10px #FFF;
          background-color: rgba(255, 255, 255, 1);
        }
        
        .navbar nav ul {
          display: flex;
          list-style: none;
        }
        
        .navbar nav a {
          text-decoration: none;
          padding: 0 30px;
          font-size: 20px;
          color: #000;
        }
        
        .navbar nav a:hover {
          color: #fff;
          font-size: 25px;
        }
        
        .flex {
          display: flex;
        }
      `}</style>
    </div>
  );
}