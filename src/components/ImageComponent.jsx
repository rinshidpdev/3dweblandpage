import React from 'react';

const ImageComponent = ({ imageUrl, altText, className }) => {
    return (
        <div className={`image-container ${className || ''}`}>
          <div className="image-wrapper">
            <img 
              src={imageUrl} 
              alt={altText || 'Image'} 
              className="responsive-image"
            />
          </div>
          
          <style jsx>{`
            .image-container {
             
              width: 100%;
              display: flex;
              justify-content: center;
              background-color: black; /* Match the black background of the image */
            }
            
            .image-wrapper {
              width: 100%;
              /* Remove white space by making sure image fills container */
              display: flex;
              justify-content: center;
              overflow: hidden;
            }
            
            .responsive-image {
              width: 100%;
              height: auto;
              display: block;
              /* Crop the excess height */
              object-fit: cover;
              /* You can adjust this value based on your preferred aspect ratio */
              max-height: 100vh;
            }
            
            /* Media queries for responsive behavior */
            @media (max-width: 768px) {
              .responsive-image {
                max-height: 30vh;
              }
            }
            
            @media (max-width: 480px) {
              .responsive-image {
                max-height: 25vh;
              }
            }
          `}</style>
        </div>
      );
    };
export default ImageComponent;