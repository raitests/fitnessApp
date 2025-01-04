import React from 'react';
import './LandingPage.css';
import img1 from '../assets/landingpage-image.png';
import { Dumbbell, ChartNoAxesColumnIncreasing, CirclePlay } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
        <Dumbbell strokeWidth={1} size={36}/>
          FITNESXIA
        </div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">About Us</a>
          <a href="#">Program</a>
          <a href="#">Membership</a>
          <a href="#">Testimonials</a>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <h1>
            GET HEALTHY BODY<br />
            WITH THE PERFECT<br />
            EXERCISES
          </h1>
          <p className="hero-text">
            We are always there to help you to make a healthy body
            and mind through the power of fitness.
          </p>
          <div className="cta-buttons">
            <button className="get-started-btn">Get Started</button>
            <button className="watch-video-btn">
              <span className="play-icon"><CirclePlay strokeWidth={1} color='#ff3333' fill='#27272d'size={42}/></span>
              Watch Video
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <h3>105+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="stat-item">
              <h3>970+</h3>
              <p>Member Joined</p>
            </div>
            <div className="stat-item">
              <h3>135+</h3>
              <p>Fitness Programs</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={img1} alt="Fitness trainers" />
          <div className="calories-card">
            <p className="card-label">Today's Calories</p>
            <p className="calorie-count">150 Cal</p>
            <div className="stats-row">
              <span className="trend">↗ +2.76% This Week</span>
              <div className="bar-graph">
              <ChartNoAxesColumnIncreasing strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;