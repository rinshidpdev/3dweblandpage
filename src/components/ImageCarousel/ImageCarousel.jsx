
import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

import img1 from '../../assets/imgc1.jpg'
import img2 from '../../assets/imgc2.png'
import img3 from '../../assets/imgc3.png'
import img4 from '../../assets/imgc4.png'
import img5 from '../../assets/imgc5.png'
import img6 from '../../assets/imgc6.jpg'

const images = [
  { src: img1, title: "Friends of Cancer Patients", desc: "Sharjah based cancer focused non-profit organization" },
  { src: img2, title: "Eluxura", desc: "The region’s first online ethical beauty destination" },
  { src:img3, title: "STRAW", desc: "London's favorite mobile bubble tea brand" },
  { src: img4, title: "Brand 4", desc: "Description for brand 4" },
  { src: img5, title: "Brand 5", desc: "Description for brand 5" },
  { src: img6, title: "Brand 6", desc: "Description for brand 6" },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Show 1 image on small screens
      } else {
        setSlidesPerView(3); // Show 3 images on large screens
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + slidesPerView) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${(index / slidesPerView) * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="carousel-card">
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
              <a href="#" className="view-case-study">View Case Study →</a>
            </div>
          </div>
        ))}
      </div>
      <button className="see-more">Our Work</button>
    </div>
  );
};

export default ImageCarousel;

