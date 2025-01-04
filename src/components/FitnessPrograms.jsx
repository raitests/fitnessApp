import React from 'react';
import { BicepsFlexed, Dumbbell, Footprints, Accessibility} from 'lucide-react';
import './FitnessPrograms.css';

const FitnessPrograms = () => {
  const programs = [
    {
      icon: <Dumbbell size={64} fill='white'/>,
      title: 'Strength Training',
      description: 'Our trainers will design that a progressive workout plans that proper achieve gains strength.',
    },
    {
      icon: <Accessibility size={64} fill='white' />,
      title: 'Basic Yoga',
      description: 'This program combines yoga with cardio & strength training to help lose weight & fitness.',
    },
    {
      icon: <BicepsFlexed size={64} fill='white'/>,
      title: 'Body Building',
      description: 'For those looking to increase strength build lean muscle, our strength & muscle.',
    },
    {
      icon: <Footprints size={64}  fill='white' />,
      title: 'Weight Loss',
      description: 'our weight loss programs are designed to help you make sustainable lifestyle changes.',
    }
  ];

  return (
    <div className="programs-container">
      <div className="programs-header">
        <h1>The Best Programs We Offers For You</h1>
        <p className="header-description">
          We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim to help your achieve specific goals & maximize results.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className={`program-card ${program.title === 'Body Building' ? 'highlighted' : ''}`}>
            <div className="program-icon">{program.icon}</div>
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <button className="learn-more">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessPrograms;