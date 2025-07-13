import React from "react";
import { motion } from "framer-motion";
import ball from '../../assets/ball.png';

const LaunchBrand = () => {
  return (
    <div style={{
      background: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '60px 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '0 20px'
      }}>

        {/* 3D Animated Logo */}
        <motion.div
          style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 20px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: 1000,
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        >
          <img
            src={ball}
            alt="Brand Logo"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              transformStyle: "preserve-3d"
            }}
          />
        </motion.div>

        {/* Title */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          margin: '0 0 30px 0',
          lineHeight: '1.1'
        }}>
          Launch your Brand
        </h1>

        {/* Paragraphs */}
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          margin: '0 0 25px 0',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          With a brand strategy in place, it's time for the big unveil. Whether it's an exciting 
          new product or an existing corporate brand that needs a refresh, it needs to have a 
          go-to-market strategy.
        </p>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          margin: '0 0 50px 0',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          With comprehensive branding solutions to support your brand expansion, we are one 
          of the leading branding companies in Dubai.
        </p>

        {/* Features */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0',
          margin: '50px 0',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          flexWrap: 'wrap'
        }}>
          <span style={{ padding: '0 20px' }}>Launch Planning</span>
          <span style={{ color: '#d4ff00', fontSize: '1.5rem' }}>|</span>
          <span style={{ padding: '0 20px' }}>Brand Activations</span>
          <span style={{ color: '#d4ff00', fontSize: '1.5rem' }}>|</span>
          <span style={{ padding: '0 20px' }}>Campaign Development</span>
        </div>

        {/* Button */}
        <button style={{
          background: 'transparent',
          color: 'white',
          border: '2px solid white',
          padding: '12px 24px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          borderRadius: '4px'
        }}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default LaunchBrand;
