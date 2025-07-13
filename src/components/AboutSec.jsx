import React from 'react';

const AboutSec = ({heading,para}) => {
  return (
    <div className="we-are-section">
      <h1> { heading || 'We are..'}</h1>
      <p>
        {para || `Moonbox is a Dubai-based brand consultancy. We develop brands that inspire wonder, 
        establish connections and underscore transformative impact.`}
        
      </p>

      {/* Inline CSS using Next.js <style jsx> */}
      <style jsx>{`
        .we-are-section {
          background-color: #000; /* Black background */
          color: #fff;            /* White text */
          padding: 4rem 2rem;
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .we-are-section h1 {
          font-size: 3rem;
          font-weight: 600;
          // margin-bottom: 1rem;
          line-height: 1.2;
          letter-spacing: 0.02em;
          padding-left: 55px; 
           
        }

        .we-are-section p {
          font-size: 1.4rem;
          line-height: 1.6;
          max-width: 800px;
          padding-left: 55px; 
          font-weight: 900;
        }

        /* Responsive styles for screens under 768px */
        @media (max-width: 768px) {
          .we-are-section {
            padding: 2rem 1rem;
          }

          .we-are-section h1 {
            font-size: 2rem;
          }

          .we-are-section p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSec;
