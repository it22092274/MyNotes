import React from 'react';
import '../styles/PricingSection.css'; // Import external CSS file
import { FaCheck, FaTimes } from 'react-icons/fa';

function PricingSection() {
  const features = [
    'Unlimited Notes',
    'Unlimited Tags',
    'Notifications',
    'Archive',
    'Add Images',
    'Add Videos',
    'Collab',
    'Notefy integration API',
    'Version history',
    'Notefy AI manager',
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$0',
      features: {
        'Unlimited Notes': true,
        'Unlimited Tags': true,
        'Notifications': true,
        'Archive': true,
        'Add Images': false,
        'Add Videos': false,
        'Collab': false,
        'Notefy integration API': false,
        'Version history': false,
        'Notefy AI manager': false,
      },
    },
    {
      name: 'Pro',
      price: '$9.99/month',
      features: {
        'Unlimited Notes': true,
        'Unlimited Tags': true,
        'Notifications': true,
        'Archive': true,
        'Add Images': true,
        'Add Videos': true,
        'Collab': true,
        'Notefy integration API': false,
        'Version history': false,
        'Notefy AI manager': false,
      },
    },
    {
      name: 'Enterprise',
      price: '$19.99/month',
      features: {
        'Unlimited Notes': true,
        'Unlimited Tags': true,
        'Notifications': true,
        'Archive': true,
        'Add Images': true,
        'Add Videos': true,
        'Collab': true,
        'Notefy integration API': true,
        'Version history': true,
        'Notefy AI manager': true,
      },
    },
  ];

  return (
    <section className="pricing-section" id='pricing'>
      <h2>Choose a pricing plan to get started with Notefy</h2>
      <div className="pricing-list">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {features.map((feature, idx) => (
                <li key={idx}>
                  {plan.features[feature] ? <FaCheck className="check" /> : <FaTimes className="times" />} {feature}
                </li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
