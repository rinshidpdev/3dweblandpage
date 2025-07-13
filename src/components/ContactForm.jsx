import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form-container" >
      <h1 className="contact-heading" >Let's Capture Wonder</h1>
      
      <div className="content-container" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <div className="form-container">
          <div className="form-row">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="tel" placeholder="Phone" className="form-input" />
          </div>
          
          <div className="form-row">
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Company" className="form-input" />
          </div>
          
          <textarea placeholder="Message" className="form-textarea"></textarea>
          
          <div className="button-container">
            <button type="submit" className="form-button">Send</button>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="address">
            <p>Latifa Towers 34th Floor, Office 3401</p>
            <p>Sheikh Zayed Road, Dubai</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:hello@moonbox.ae">hello@moonbox.ae</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">☎</span>
              <a href="tel:042696733">04 2696733</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:0524219856">052 421 9856</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <a href="#">Get Direction</a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Import the exact script font */
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

 
        
        .contact-form-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 40px 0;
          background-color: #000000;
          color: #ffffff;
          font-family: sans-serif;
           
        }
        
        .contact-heading {
          font-family: 'Sacramento', cursive;
          font-size: 120px;
          color: #c5ff00;
          text-align: center;
          margin-bottom: 60px;
          font-weight: normal;
          line-height: 1;
         
        }
        
        .content-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
        }
        
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 60%;
          padding-right: 20px;
          
        }
        
        .contact-info {
          width: 40%;
          padding-left: 20px;
        }
        
        .form-row {
          display: flex;
          gap: 20px;
          width: 100%;
        }
        
        .form-input {
          flex: 1;
          background-color: transparent;
        //   border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 15px;
          font-size: 16px;
          outline: none;
          width: 100%;
           border: 1px solid #ffffff;
        }
        
        .form-textarea {
          width: 100%;
          min-height: 180px;
          background-color: transparent;
        //   border: 1px solid rgba(255, 255, 255, 0.3);
         border: 1px solid #ffffff;
          color: #ffffff;
          padding: 15px;
          font-size: 16px;
          resize: none;
          outline: none;
        }
        
        .button-container {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
        }
        
        .form-button {
          background-color: transparent;
          border: 1px solid #ffffff;
          color: #ffffff;
          padding: 15px 50px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-transform: uppercase;
        }
        
        .form-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .address {
          text-align: left;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .contact-details {
          text-align: left;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .contact-icon {
          margin-right: 10px;
          font-size: 18px;
        }
        
        a {
          color: #ffffff;
          text-decoration: none;
        }
        
        a:hover {
          color: #c5ff00;
        }
        
        ::placeholder {
          color: #666666;
        }
        
        /* Responsive styles */
        @media (max-width: 968px) {
          .contact-heading {
            font-size: 100px;
          }
        }
        
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }
          
          .form-container, .contact-info {
            width: 100%;
            padding: 0;
          }
          
          .contact-info {
            margin-top: 40px;
          }
          
          .contact-heading {
            font-size: 80px;
          }
        }
        
        @media (max-width: 640px) {
          .form-row {
            flex-direction: column;
            gap: 15px;
          }
          
          .contact-heading {
            font-size: 70px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-heading {
            font-size: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;