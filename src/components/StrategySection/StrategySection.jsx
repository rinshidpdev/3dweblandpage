// import "./StrategySection.css";

// import img from '../../assets/str.png'
// import bowlImage from '../../assets/second.png'


// const StrategySection = () => {
//   return (
//     <section className="strategy">
//       <div className="content-wrapper">
//         <div className="strategy-content">
//           <h1>Start with Strategy</h1>
//           <p>
//             Brand strategy goes beyond logo and design ideas. <br />
//             A brand built on an authentic and consistent brand strategy <br />
//             can inspire wonder and kickstart transformative impact.
//           </p>

//           <div className="branding-categories">
//             <span>Brand Messaging</span>
//             <span>Brand Positioning</span>
//             <span>Brand Expression</span>
//           </div>

//           <div className="buttons">
//             <button className="btn">Read More</button>
//             <button className="btn">Get In Touch</button>
//           </div>
//         </div>

//         <div className="strategy-image">
//           <img src={img} alt="3D Strategy Illustration"  className="main-object"/>
//           <img src={bowlImage} alt="Bowl" className="bowl-image" style={{width:250}} />
        
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default StrategySection;
import { useEffect } from "react";
import "./StrategySection.css";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../../assets/str.png";
import bowlImage from "../../assets/second.png";

const StrategySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="strategy">
      <div className="content-wrapper">
        <div className="strategy-content" data-aos="fade-right">
          <h1>Start with Strategy</h1>
          <p>
            Brand strategy goes beyond logo and design ideas. <br />
            A brand built on an authentic and consistent brand strategy <br />
            can inspire wonder and kickstart transformative impact.
          </p>

          <div className="branding-categories">
            <span>Brand Messaging</span>
            <span>Brand Positioning</span>
            <span>Brand Expression</span>
          </div>

          <div className="buttons">
            <button className="btn">Read More</button>
            <button className="btn">Get In Touch</button>
          </div>
        </div>

        <div className="strategy-image">
          <img src={img} alt="3D Strategy Illustration" className="main-object" />
          <img src={bowlImage} alt="Bowl" className="bowl-image" style={{ width: 250 }} />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
