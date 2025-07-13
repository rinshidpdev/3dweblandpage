import React from 'react';

const InfoPanels = ({ panels, className }) => {
  // Default panels content if none provided
  const defaultPanels = [
    {
      heading: "Our Team",
      content: "Moonbox believes that happy people do the best work, so as an equal opportunity employer, we make sure that we do everything to make them feel they are included and seen, no matter where we call home. We compensate them justly and on time so they can live decently here and support their families back home"
    },
    {
      heading: "Our Clients",
      content: "Over the years, we've built amazing relationships with the people we've helped. They're no longer seen as clients but have become our teammates. For us, it's not just about going the extra mile—it's knowing that everyone needs a partner that will help them get to the where they want to be"
    },
    {
      heading: "Our Communities",
      content: "One of our collective goals is to help improve life for all. We identify underserved communities, and through our partnerships with non-profit organisations and charitable groups, we hope to transform more lives for the better"
    }
  ];

  const displayPanels = panels || defaultPanels;

  return (
    <div className={`panels-container ${className || ''}`}>
      <div className="panels-grid">
        {displayPanels.map((panel, index) => (
          <div key={index} className="panel">
            <h2 className="panel-heading">{panel.heading}</h2>
            <p className="panel-content">{panel.content}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .panels-container {
          width: 100%;
          background-color: black;
          color: white;
          padding: 40px 20px 60px;
          font-family: Arial, sans-serif;
        }

        .panels-grid {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .panel {
          flex: 1;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 40px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .panel-heading {
          font-size: 32px;
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 30px;
        }

        .panel-content {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .panel {
            padding: 30px;
            min-height: 350px;
          }
          
          .panel-heading {
            font-size: 28px;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .panels-grid {
            flex-direction: column;
            gap: 20px;
          }
          
          .panel {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .panels-container {
            padding: 30px 15px 40px;
          }
          
          .panel {
            padding: 25px 20px;
          }
          
          .panel-heading {
            font-size: 24px;
            margin-bottom: 15px;
          }
          
          .panel-content {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoPanels;