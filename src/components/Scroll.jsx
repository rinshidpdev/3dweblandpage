import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Scroll.css';
import img from '../assets/space1.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ScrollTriggerDemo2 = () => {
  const containerRef = useRef(null);
  const redTweenRef = useRef(null);

  useEffect(() => {
    // The magic helper function...
    function getScrollPosition(animation, progress) {
      let p = gsap.utils.clamp(0, 1, progress || 0),
          nested = !animation.scrollTrigger,
          st = nested ? animation.parent.scrollTrigger : animation.scrollTrigger,
          containerAnimation = st.vars.containerAnimation,
          range = st.end - st.start,
          position = st.start + range * p;
      if (containerAnimation) {
        st = containerAnimation.scrollTrigger;
        return (st.start + (st.end - st.start) * (position / containerAnimation.duration()));
      } else if (nested) {
        let start = st.start + (animation.startTime() / animation.parent.duration()) * range,
            end = st.start + ((animation.startTime() + animation.duration()) / animation.parent.duration()) * range;
        return start + (end - start) * p;
      }
      return position;
    }

    const images = gsap.utils.toArray(".scroll-image");
    
    // Main horizontal scroll animation
    const scrollTween = gsap.to(images, {
      xPercent: -100 * (images.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 0.1,
        end: "+=2500",
        markers: false
      }
    });

    // Red section image animation
    redTweenRef.current = gsap.to(".image-2", {
      scale: 1.2,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".image-2",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset",
        id: "1",
        markers: false
      }
    });

    // Gray section image animation
    gsap.to(".image-3", {
      rotation: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".image-3",
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
        id: "2",
        markers: false
      }
    });

    // Purple section image animation
    ScrollTrigger.create({
      trigger: ".image-4",
      containerAnimation: scrollTween,
      toggleClass: "active",
      start: "center 60%",
      id: "3",
      markers: false
    });

    // Green section image animation
    ScrollTrigger.create({
      trigger: ".image-5",
      containerAnimation: scrollTween,
      start: "center 65%",
      end: "center 51%",
      onEnter: () => console.log("enter"),
      onLeave: () => console.log("leave"),
      onEnterBack: () => console.log("enterBack"),
      onLeaveBack: () => console.log("leaveBack"),
      onToggle: self => console.log("active", self.isActive),
      id: "4",
      markers: false
    });

    // Remove all marker elements
    gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", 
      { autoAlpha: 0, display: 'none' });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      scrollTween.kill();
    };
  }, []);

  const handleScrollTo = () => {
    gsap.to(window, { scrollTo: getScrollPosition(redTweenRef.current) });
  };

  // Helper function accessible within event handlers
  const getScrollPosition = (animation, progress) => {
    let p = gsap.utils.clamp(0, 1, progress || 0),
        nested = !animation.scrollTrigger,
        st = nested ? animation.parent.scrollTrigger : animation.scrollTrigger,
        containerAnimation = st.vars.containerAnimation,
        range = st.end - st.start,
        position = st.start + range * p;
    if (containerAnimation) {
      st = containerAnimation.scrollTrigger;
      return (st.start + (st.end - st.start) * (position / containerAnimation.duration()));
    } else if (nested) {
      let start = st.start + (animation.startTime() / animation.parent.duration()) * range,
          end = st.start + ((animation.startTime() + animation.duration()) / animation.parent.duration()) * range;
      return start + (end - start) * p;
    }
    return position;
  };

  return (
    <>
      <div className="description">
        {/* <div>
          <h1>ScrollTrigger Demo</h1>
          <p>
            Horizontal scrolling animation with interactive images.
            <br /><br />
            <button id="scrollTo" onClick={handleScrollTo}>scroll to red section</button>
          </p>
        </div> */}
        <div className="scroll-down">
          Scroll down<div className="arrow"></div>
        </div>
      </div>
      
      <div className="container" ref={containerRef}>
        <img src={img} alt="Blue section" className="scroll-image image-1" />
        <img src={img} alt="Red section" className="scroll-image image-2" />
        <img src={img} alt="Gray section" className="scroll-image image-3" />
        <img src={img} alt="Purple section" className="scroll-image image-4" />
        <img src={img} alt="Green section" className="scroll-image image-5" />
      </div>

      <div className="final">
        <div>
          <h1>ScrollTrigger Animation</h1>
          <p>Smooth horizontal scrolling with GSAP ScrollTrigger</p>
        </div>
      </div>
    </>
  );
};

export default ScrollTriggerDemo2;