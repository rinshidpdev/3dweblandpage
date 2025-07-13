import React, { useState, useEffect, useRef } from "react";
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';

const testimonials = [
  { text: "MOONBOX should be a big part of your marketing plan and team!", name: "Dr. Sawsan Abdul Salam", position: "Director", logo: logo1 },
  { text: "Thanks a lot for the help Moonbox Team. You did an amazing job.", name: "Hanna Shamas", position: "CEO", logo: logo2 },
  { text: "We are really impressed with their new ideas and amazing concepts.", name: "Jackie Kakiza", position: "Founder", logo: logo3 },
  { text: "Their strategic thinking and creativity are unparalleled.", name: "Michael Johnson", position: "Marketing Head", logo: logo4 },
  { text: "Amazing service and professional team. They delivered more than expected!", name: "Sophia Williams", position: "Project Manager", logo: logo5 },
  { text: "Their passion and expertise are evident in everything they do.", name: "David Brown", position: "Business Owner", logo: logo6 },
];

const TestimonialsCarousel = () => {
  const [cardsPerScreen, setCardsPerScreen] = useState(3);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  // Calculate how many cards to show based on screen width
  useEffect(() => {
    const updateCardsPerScreen = () => {
      if (window.innerWidth <= 717) {
        setCardsPerScreen(1);
      } else if (window.innerWidth <= 963) {
        setCardsPerScreen(2);
      } else {
        setCardsPerScreen(3);
      }
    };

    updateCardsPerScreen();
    window.addEventListener("resize", updateCardsPerScreen);
    return () => window.removeEventListener("resize", updateCardsPerScreen);
  }, []);

  // Auto scroll function
  useEffect(() => {
    if (testimonials.length <= cardsPerScreen) return; // Don't scroll if all cards fit

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentPosition(prev => {
          const nextPos = prev + 1;
          return nextPos >= testimonials.length ? 0 : nextPos;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerScreen, isTransitioning]);

  // Reset transition flag after animation completes
  useEffect(() => {
    const transitionEndHandler = () => {
      setIsTransitioning(false);
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener('transitionend', transitionEndHandler);
      return () => {
        container.removeEventListener('transitionend', transitionEndHandler);
      };
    }
  }, []);

  // Create a carousel that loops
  const renderCards = () => {
    // Add duplicates to create a seamless loop
    const displayItems = [...testimonials, ...testimonials];
    
    return displayItems.map((testimonial, i) => (
      <div 
        key={i} 
        style={{ 
          flex: `0 0 ${100 / cardsPerScreen}%`,
          padding: "15px",
          boxSizing: "border-box",
          transition: "transform 0.5s ease"
        }}
      >
        <div style={{ 
          background: "#fff", 
          color: "#000", 
          padding: "40px", 
          borderRadius: "15px", 
          boxShadow: "0px 6px 12px rgba(255,255,255,0.1)",
          minHeight: "390px",
          height: "100%",
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between" 
        }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>{testimonial.text}</p>
          <div>
            <hr style={{ border: "0.5px solid #ddd" }} />
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
              <div style={{ flex: 1, textAlign: "left" }}>
                <strong>{testimonial.name}</strong>
                <p style={{ fontSize: "16px", color: "#555", marginBottom:'30px' }}>{testimonial.position}</p>
              </div>
              <img src={testimonial.logo} alt="Logo" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ width: "100vw", minHeight: "500px", backgroundColor: "#000", color: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", overflow: "hidden" }}>
     <h2
  style={{ fontSize: "42px", marginBottom: "15px" }}
  data-aos="fade-up"
  data-aos-duration="1000"
>
  Loved by the best
</h2>

      <p style={{ fontSize: "20px", marginBottom: "40px" }}>Here are just some of the people we've helped</p>

      <div style={{ width: "80%", maxWidth: "1200px", overflow: "hidden" }}>
        <div 
          ref={carouselRef}
          style={{
            display: "flex",
            transform: `translateX(-${currentPosition * (100 / cardsPerScreen)}%)`,
            transition: "transform 0.8s ease-in-out",
            width: "100%"
          }}
        >
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;