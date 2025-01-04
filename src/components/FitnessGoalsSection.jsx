import React from 'react';
import './FitnessGoalsSection.css';
import goalsImg from '../assets/goals.jpg';
import whitelogo1 from '../assets/white1.png';
import whitelogo2 from '../assets/white2.png';
import whitelogo3 from '../assets/white3.png';
import weightlogo from '../assets/weight-lifting.png';

const FitnessGoalsSection = () => {
  return (
    <div className="section-container">
      <div className="partners">
        <div className="partner-stats">
          <h2>970K+ More</h2>
          <p>Trusted Companies Partner</p>
        </div>
        <div className="partner-logos">
          <img src={whitelogo1} alt="VideoAsk" className="partner-logo" />
          <img src={whitelogo2} alt="HubSpot" className="partner-logo" />
          <img src={whitelogo3} alt="Mapbox" className="partner-logo" />
        </div>
      </div>

      <div className="content-section">
        <div className="image-container">
          <img 
            src={goalsImg}
            alt="Professional trainer with battle ropes" 
            className="trainer-image" 
          />
          <div className="trainer-badge">
            <img className="trainer-logo" src={weightlogo}></img>
            <div className="trainer-text">
              <span>Professional</span>
              <span>Trainer</span>
            </div>
          </div>
        </div>

        <div className="text-content">
          <h2>Get Ready To Reach<br />Your Fitness Goals</h2>
          <p>We are a gym that is committed to helping people reach their fitness goals. We offer a variety of theirs programs and services to fit your needs, whether you are a experienced athlete.</p>
          <p>We believe that everyone should have access to the benefits of exercise make it happen.</p>
          <button className="trial-button">Free Trial Today</button>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoalsSection;