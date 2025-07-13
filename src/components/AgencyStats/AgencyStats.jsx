import React, { useEffect, useState } from "react";
import "./AgencyStats.css";

const Counter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <span>{count}+</span>;
};

const AgencyStats = () => {
  return (
    <section className="agency-stats1">
      <div className="agency-content1">
        <h1 data-aos="zoom-in" data-aos-delay="0">Welcome to my Landing page, Home of the Best Branding Agency in the world</h1>
        <p  data-aos="zoom-in" data-aos-delay="300">
          We kickstart meaningful change through well-crafted stories, inspiring
          design, and outstanding experiences that bring your brand to the limelight.
          Our proven brand strategy and creative design solutions have led us to become
          the top Creative Agency in Dubai. We proudly stand as the foremost Branding Agency in Dubai, spearheading the
          charge as a digital collaborator and advertising enterprise that joins forces
          with forward-thinking enterprises to construct audacious and purposeful brands.
          Our <strong> Design Agency</strong> pushes the boundaries of design and
          strategy to ensure your brand stands out and sets new standards.
        </p>
        
         
        
        <p>Let’s get started with your brand journey!</p>
      </div>

      <div className="stats-container1">
        <div className="stat-box1">
          <Counter value={13} duration={2000} />
          <p>Industry Expertise</p>
        </div>
        <div className="stat-box1">
          <Counter value={35} duration={2000} />
          <p>In-house Team</p>
        </div>
        <div className="stat-box1">
          <Counter value={1000} duration={2000} />
          <p>Branding Projects</p>
        </div>
      </div>
    </section>
  );
};

export default AgencyStats;
