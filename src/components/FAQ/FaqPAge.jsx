import React, { useState } from 'react';
import './FAQ.css'; // Make sure to create a corresponding CSS file for styling

const FAQ = () => {
  // State to manage the visibility of the answers
  const [visible, setVisible] = useState({
    freeTrial: false,
    changePlan: false,
    cancellationPolicy: false,
  });

  // Function to toggle visibility
  const toggleVisibility = (section) => {
    setVisible((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="faq-container">
      <div className="faq-section">
      <h4 style={{ fontWeight: 700,color:"white" }} className="text-center mb-4">
              FAQ - GENERAL
            </h4>


        <div className="faq-question" onClick={() => toggleVisibility('freeTrial')}>
        What is the OWPMF??
          <span className="toggle-icon">{visible.freeTrial ? '-' : '+'}</span>
        </div>
        {visible.freeTrial && (
          <div className="faq-answer">
          It is our way of saying “thank you” for being a loyal customer. Earn points (Peace Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div className="faq-question" onClick={() => toggleVisibility('changePlan')}>
        How to become a Loyalty club member?
          <span className="toggle-icon">{visible.changePlan ? '-' : '+'}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.changePlan && <div className="faq-answer">As soon as you sign up with OWPMF, or if you are an existing registered customer, you will automatically receive free membership to our OWPMF.</div>}
      </div>

      <div className="faq-section">
        <div className="faq-question" onClick={() => toggleVisibility('cancellationPolicy')}>
          What is your cancellation policy?
          <span className="toggle-icon">{visible.cancellationPolicy ? '-' : '+'}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.cancellationPolicy && <div className="faq-answer">Answer to cancellation policy.</div>}
      </div>
    </div>
  );
};

export default FAQ;
