import React from 'react';
import './FitnessServices.css';
import watch from '../assets/watch.png';
import {HeartPulse, Flame} from 'lucide-react';

const FitnessServices = () => {
  const services = [
    {
      title: 'Personal Training',
      description: 'Our personal trainers can help you create a personalized fitness plan and track your progress.',
    },
    {
      title: 'Expert Trainer',
      description: 'Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.',
    },
    {
      title: 'Flexible Time',
      description: 'There are many fitness classes that are offered during off-peak hours, such as early morning or late evening.',
    },
  ];

  return (
    <div className="fitnesxia-services-container">
      <div className="fitnesxia-services-content">
        <div className="fitnesxia-services-left">
          <h1>Why Should People Choose Fitnesxia Services</h1>
          
          <div className="fitnesxia-services-list">
            {services.map((service, index) => (
              <div key={index} className="fitnesxia-service-item">
                <div className="fitnesxia-check-icon">✓</div>
                <div className="fitnesxia-service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="fitnesxia-join-button">Join Today</button>
        </div>

        <div className="fitnesxia-services-right">
          <div className="fitnesxia-image-wrapper">
            <div className="fitnesxia-orange-circle"></div>
            <img className="fitnesxia-trainer-image" src={watch} alt="Fitness trainer" />
            <div className="fitnesxia-stat-card fitnesxia-heart-rate">
              <div className="fitnesxia-stat-icon"><HeartPulse size={36} fill='#fc2330' /></div>
              <div className="fitnesxia-stat-text">
                <div className="fitnesxia-stat-value">70 bpm</div>
                <div className="fitnesxia-stat-label">Heart Rate</div>
              </div>
            </div>
            <div className="fitnesxia-stat-card fitnesxia-fat-burning">
              <div className="fitnesxia-stat-icon"><Flame size={36} fill='orange' /></div>
              <div className="fitnesxia-stat-text">
                <div className="fitnesxia-stat-value">24%</div>
                <div className="fitnesxia-stat-label">Fat Burning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessServices;