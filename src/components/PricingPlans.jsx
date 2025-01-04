import React, { useState } from 'react';
import './PricingPlans.css';

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      type: 'DISCOVER',
      price: '99',
      features: [
        '5 classes per month',
        '4 group class monthly',
        'Online class access',
        'E-book fitness guide'
      ]
    },
    {
      type: 'ENTERPRISE',
      price: '299',
      features: [
        '10 classes per month',
        '8 group class monthly',
        'Online class access',
        'E-book fitness guide',
        '7 Extra fitness training'
      ]
    },
    {
      type: 'PROFESSIONAL',
      price: '199',
      features: [
        '7 classes per month',
        '6 group class monthly',
        'Online class access',
        'E-book fitness guide'
      ]
    }
  ];

  return (
    <div className="fit-pricing-container">
      <h1 className="fit-pricing-title">Choose The Best Plan</h1>
      <p className="fit-pricing-subtitle">
        Choose a plan that's right far your growing team. Simple pricing & No hidden charges.
      </p>

      <div className="fit-pricing-toggle">
        <button 
          className={`fit-toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingPeriod('monthly')}
        >
          Monthly
        </button>
        <button 
          className={`fit-toggle-btn ${billingPeriod === 'annual' ? 'active' : ''}`}
          onClick={() => setBillingPeriod('annual')}
        >
          Annual
        </button>
      </div>

      <div className="fit-pricing-cards">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`fit-pricing-card ${plan.type === 'ENTERPRISE' ? 'fit-card-enterprise' : ''}`}
          >
            <h2 className="fit-card-type">{plan.type}</h2>
            <div className="fit-card-price">
              <span className="fit-price-currency">$</span>
              <span className="fit-price-amount">{plan.price}</span>
              <span className="fit-price-period">/ Per Month</span>
            </div>
            <ul className="fit-features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="fit-feature-item">
                  <span className="fit-check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`fit-choose-btn ${plan.type === 'ENTERPRISE' ? 'fit-btn-enterprise' : ''}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;