import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function OsmoParallax() {
  const parallaxLayersRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    
    // Connect Lenis to GSAP's ticker
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // Initialize parallax effect
    if (parallaxLayersRef.current) {
      const triggerElement = parallaxLayersRef.current;
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });
      
      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];
      
      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    // Cleanup function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      
      // Kill any GSAP animations
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(parallaxLayersRef.current?.querySelectorAll('[data-parallax-layer]'));
    };
  }, []);

  return (
    <div className="parallax">
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers" ref={parallaxLayersRef}>
            <img 
              src="https://imgcdn.stablediffusionweb.com/2024/4/11/44e1647e-2a38-4a83-a251-a33afc5c2d15.jpg" 
              loading="eager" 
              width="800" 
              data-parallax-layer="1" 
              alt="" 
              className="parallax__layer-img"
            />
            <img 
               
              width="800" 
              data-parallax-layer="2" 
              alt="" 
              className="parallax__layer-img"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title"></h2>
            </div>
            <img 
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp" 
              loading="eager" 
              width="800" 
              data-parallax-layer="4" 
              alt="" 
              className="parallax__layer-img"
            />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
      
      
      <style jsx>{`
        /* Osmo UI: https://slater.app/10324/23333.css */
        body {
          background-color: #000;
          color: #fff;
          margin: 0;
          padding: 0;
        }
        
        .cloneable {
          padding: 2rem;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          display: flex;
          position: relative;
        }
        
        .parallax__fade {
          --color-dark-rgb: 0, 0, 0;
          background: linear-gradient(to top, rgba(var(--color-dark-rgb), 1) 0%, rgba(var(--color-dark-rgb), 0.738) 19%, rgba(var(--color-dark-rgb), 0.541) 34%, rgba(var(--color-dark-rgb), 0.382) 47%, rgba(var(--color-dark-rgb), 0.278) 56.5%, rgba(var(--color-dark-rgb), 0.194) 65%, rgba(var(--color-dark-rgb), 0.126) 73%, rgba(var(--color-dark-rgb), 0.075) 80.2%, rgba(var(--color-dark-rgb), 0.042) 86.1%, rgba(var(--color-dark-rgb), 0.021) 91%, rgba(var(--color-dark-rgb), 0.008) 95.2%, rgba(var(--color-dark-rgb), 0.002) 98.2%, transparent 100%);
        }
        
        .osmo-icon-svg {
          width: 8em;
          position: relative;
        }
        
        .parallax__header {
          z-index: 2;
          padding: 4rem 2rem;
          justify-content: center;
          align-items: center;
          min-height: 100svh;
          display: flex;
          position: relative;
        }
        
        .parallax {
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .parallax__content {
          padding: 4rem 2rem;
          justify-content: center;
          align-items: center;
          min-height: 100svh;
          display: flex;
          position: relative;
        }
        
        .cover {
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .parallax__visuals {
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 120%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .parallax__placeholder {
          z-index: 0;
          opacity: 0;
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .parallax__layers {
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
        }
        
        .cover-copy {
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .parallax__fade {
          z-index: 30;
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 20%;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        
        .parallax__black-line-overflow {
          z-index: 20;
          background-color: #000;
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -1px;
          left: 0;
        }
        
        .parallax__title {
          pointer-events: auto;
          text-align: center;
          text-transform: none;
          margin-top: 0;
          margin-bottom: .1em;
          margin-right: .075em;
          font-family: 'PP Neue Corp Wide', sans-serif;
          font-size: 11vw;
          font-weight: 800;
          line-height: 1;
          position: relative;
        }
        
        .parallax__radial-gradient {
          z-index: 10;
          background-image: radial-gradient(circle farthest-corner at 50% 50%, transparent, #000);
          opacity: .5;
          pointer-events: none;
          mix-blend-mode: multiply;
          position: fixed;
          inset: 0;
        }
        
        .parallax__layer-title {
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100svh;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .parallax__layer-img {
          pointer-events: none;
          object-fit: cover;
          width: 100%;
          max-width: none;
          height: 117.5%;
          position: absolute;
          top: -17.5%;
          left: 0;
        }
        
        .parallax__layer-img.is-third {
          top: -20%;
        }
        
        @font-face {
          font-family: 'PP Neue Corp Wide';
          src: url('https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717e399d30a606fed425914_PPNeueCorp-WideUltrabold.woff2') format('woff2');
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
