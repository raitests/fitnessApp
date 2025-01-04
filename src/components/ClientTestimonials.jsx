import React from 'react';
import { Star, ChevronRight, ChevronLeft, Plus } from 'lucide-react';
import './ClientTestimonials.css';
import reviewer1 from '../assets/reviewer1.jpg';
import trustpilot from '../assets/trustpilot.png';

const ClientTestimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-content">
        <div className="testimonials-left">
          <h2 className="testimonials-heading">
            What Our Happy Clients<br />Say About Us
          </h2>
          
          <p className="testimonials-quote">
            I've been a member of Fitness Within for about 6 months 
            now and I absolutely love it! The trainers are so motivate 
            and they really help to reach fitness goals.
          </p>

          <div className="reviewer-section">
            <div className="reviewer-avatars">
              <img src={reviewer1} alt="Reviewer 1" className="reviewer-avatar" />
              <img src={reviewer1} alt="Reviewer 2" className="reviewer-avatar" />
              <img src={reviewer1} alt="Reviewer 3" className="reviewer-avatar" />
              <img src={reviewer1} alt="Reviewer 4" className="reviewer-avatar" />
              <button className="reviewer-more-btn">
                <Plus size={20} />
              </button>
            </div>

            <div className="rating-wrapper">
              <Star className="rating-star" fill="#FFD700" color="#FFD700" />
              <span className="rating-text">4.9 (450 Reviews)</span>
            </div>
          </div>  
          <img src={trustpilot} className='trustlogo'></img>
        </div>

        <div className="testimonial-card">
          <button className="nav-btn prev">
            <ChevronLeft size={24} fill='#bdbcbc'/>
          </button>
          
          <div className="card-content">
            <div className="card-header">
              <div className="reviewer-info">
                <img src={reviewer1} alt="Farhan Rio" className="reviewer-main-avatar" />
                <div className="reviewer-details">
                  <h3 className="reviewer-name">Farhan Rio</h3>
                  <p className="reviewer-status">Happy Customer</p>
                </div>
              </div>
              <div className="rating-stars">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className="card-star"
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}
              </div>
            </div>

            <p className="card-review">
              I've been coming to this gym for 3 year now and 
              I've never been in better shape. The trainers are 
              amazing and they always push me be my best. 
              I'm so glad to this gym
            </p>
          </div>

          <button className="nav-btn next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ClientTestimonials;