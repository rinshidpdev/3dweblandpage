// import React from "react";
// import { motion } from "framer-motion";
// import "./BrandingShowcase.css";
// import imageSrc from "../../assets/vr.png"; // Replace with actual image path

// const BrandingShowcase = () => {
//   return (
//     <div className="branding-container">
//       <motion.img
//         src={imageSrc}
//         alt="Branding"
//         className="branding-image"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       />

//       <motion.div
//         className="branding-text"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>Grow your Brand</h2>
//         <p>
//           To sustain growth, your brand needs to keep the conversation going
//           with your target audience. Maintain a positive relationship with the
//           public through content, media relations, and other activities.
//           Are you ready to transform your brand with the best branding agency Dubai? Let Moonbox help your business achieve brand recognition and loyalty. Moonbox, the leading Dubai marketing agency, will guide you through your branding journey.
//         </p>

//         <div className="branding-services">
//           <span>Public Relations</span>
//           <span>Media Relations</span>
//           <span>Brand Comms</span>
//         </div>

//         <div className="branding-buttons">
//           <button>Read More</button>
//           <button>Get In Touch</button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default BrandingShowcase;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BrandingShowcase.css";
import imageSrc from "../../assets/vr.png";

const BrandingShowcase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="branding-container">
      <img
        src={imageSrc}
        alt="Branding"
        className="branding-image"
        data-aos="fade-right"
      />

      <div
        className="branding-text"
        data-aos="fade-left"
      >
        <h2>Grow your Brand</h2>
        <p>
          To sustain growth, your brand needs to keep the conversation going
          with your target audience. Maintain a positive relationship with the
          public through content, media relations, and other activities.
          Are you ready to transform your brand with the best branding agency Dubai? Let Moonbox help your business achieve brand recognition and loyalty. Moonbox, the leading Dubai marketing agency, will guide you through your branding journey.
        </p>

        <div className="branding-services">
          <span>Public Relations</span>
          <span>Media Relations</span>
          <span>Brand Comms</span>
        </div>

        <div className="branding-buttons">
          <button>Read More</button>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default BrandingShowcase;
