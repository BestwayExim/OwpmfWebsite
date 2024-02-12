import React, { useState } from "react";
import "./FAQ.css"; // Make sure to create a corresponding CSS file for styling

const FAQ = () => {
  // State to manage the visibility of the answers
  const [visible, setVisible] = useState({
    freeTrial: false,
    changePlan: false,
    cancellationPolicy: false,
    loyaltybenefits: false,
    rewards: false,
    limit: false,
    expire: false,
    stolen: false,
    merchants: false,
    accessBenefits: false,
    transferLoyalty: false,
    loyaltyEarn: false,
    friendLoyalty: false,
    loyltyGift: false,
    loyaltyToSomeone: false,
    personalLoyalty: false,
    cancelLoyalty: false,
    loyaltyRestriction: false,
    loyaltyPayDirect: false,
    appoinments: false,
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
        <h4
          style={{ fontWeight: 700, color: "white" }}
          className="text-center mb-4"
        >
          FAQ - GENERAL
        </h4>

        {visible.freeTrial && (
          <div className="faq-answer">
            The loyalty program offers benefits and discounts on a wide range of
            services, including shopping, travel, dining, entertainment, and
            more. Users can explore the available offers and participating
            merchants through our online platform.
          </div>
        )}
      </div>

      <div className="faq-section">{/* Placeholder for the answer */}</div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyaltybenefits")}
        >
          Can I use loyalty points for benefits outside of my home country?
          <span className="toggle-icon">
            {visible.loyaltybenefits ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyaltybenefits && (
          <div className="faq-answer">
            Yes, the loyalty program is often available globally, allowing you
            to enjoy benefits and redeem points in different countries. Check
            our platform or inquire with specific merchants to confirm the
            availability of benefits abroad.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("rewards")}
        >
          How do I redeem loyalty points for rewards?
          <span className="toggle-icon">{visible.rewards ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.rewards && (
          <div className="faq-answer">
            Once you have accumulated enough loyalty points, you can redeem them
            for rewards such as discounts, gift cards, merchandise, or exclusive
            experiences. The redemption process may vary depending on the
            merchant and the specific reward you want to claim.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div className="faq-question" onClick={() => toggleVisibility("limit")}>
          Is there a limit to the number of loyalty points I can earn?
          <span className="toggle-icon">{visible.limit ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.limit && (
          <div className="faq-answer">
            There is no specific limit to the number of loyalty points you can
            earn. The more you engage with participating merchants and make
            qualifying purchases, the more points you can accumulate.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("expire")}
        >
          Do loyalty points expire?
          <span className="toggle-icon">{visible.expire ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.expire && (
          <div className="faq-answer">
            The expiration policy for loyalty points may vary depending on the
            merchant and their loyalty program terms. Some programs have
            expiration dates for points, while others may offer points with no
            expiration. Check the specific terms and conditions for details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("stolen")}
        >
          What should I do if I lose my loyalty card or it is stolen?
          <span className="toggle-icon">{visible.stolen ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.stolen && (
          <div className="faq-answer">
            If you lose your loyalty card or it is stolen, please contact our
            customer support team immediately. We will assist you in securing
            your account and help you recover any associated loyalty points.
          </div>
        )}
      </div>
      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("merchants")}
        >
          How do I know which merchants participate in the loyalty program?
          <span className="toggle-icon">{visible.merchants ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.merchants && (
          <div className="faq-answer">
            You can search for participating merchants using our online
            platform. We provide a list of partnered merchants and their
            associated loyalty programs. Explore the available options to find
            merchants that align with your interests.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("accessBenefits")}
        >
          What if I want to access benefits or rewards not offered by the
          loyalty program?
          <span className="toggle-icon">
            {visible.accessBenefits ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.accessBenefits && (
          <div className="faq-answer">
            The loyalty program focuses on providing exclusive benefits and
            rewards through participating merchants. If you seek benefits or
            rewards outside the program, you may need to explore alternative
            options or consider contacting the specific merchant directly.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("transferLoyalty")}
        >
          Can I transfer my loyalty points to someone else?
          <span className="toggle-icon">
            {visible.transferLoyalty ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.transferLoyalty && (
          <div className="faq-answer">
            The transferability of loyalty points depends on the participating
            merchant and their loyalty program terms. Some programs allow point
            transfers to other participants, while others may have restrictions.
            Check the specific terms and conditions for details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyaltyEarn")}
        >
          How long does it take to receive my loyalty points after earning them?
          <span className="toggle-icon">{visible.loyaltyEarn ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyaltyEarn && (
          <div className="faq-answer">
            The time taken to credit loyalty points to your account may vary
            depending on the participating merchant and their systems. In most
            cases, points are credited within a reasonable time frame after the
            qualifying purchase or engagement.
          </div>
        )}
      </div>
      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("friendLoyalty")}
        >
          Can I use loyalty points to benefit my family members or friends?
          <span className="toggle-icon">
            {visible.friendLoyalty ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.friendLoyalty && (
          <div className="faq-answer">
            The usage of loyalty points for the benefit of family members or
            friends may vary depending on the participating merchant and their
            loyalty program terms. Some programs allow point sharing or gifting
            options. Check the specific terms and conditions for details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyltyGift")}
        >
          Can I use loyalty points for purchasing gift cards?
          <span className="toggle-icon">{visible.loyltyGift ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyltyGift && (
          <div className="faq-answer">
            The availability of using loyalty points for purchasing gift cards
            depends on the participating merchant and their loyalty program
            terms. Some programs offer this option, allowing you to redeem
            points for gift cards. Check the specific terms and conditions for
            details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyaltyToSomeone")}
        >
          Can I transfer my loyalty points to someone else?
          <span className="toggle-icon">
            {visible.loyaltyToSomeone ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyaltyToSomeone && (
          <div className="faq-answer">
            The transferability of loyalty points depends on the participating
            merchant and their loyalty program terms. Some programs allow point
            transfers to other participants, while others may have restrictions.
            Check the specific terms and conditions for details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("personalLoyalty")}
        >
          Is my personal information secure with the loyalty program?
          <span className="toggle-icon">
            {visible.personalLoyalty ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.personalLoyalty && (
          <div className="faq-answer">
            Yes, we prioritize the privacy and security of your personal
            information. We implement robust measures to protect your data and
            adhere to strict privacy policies. Your information will not be sold
            or shared with third parties without your consent.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("cancelLoyalty")}
        >
          Can I cancel my participation in the loyalty program?
          <span className="toggle-icon">
            {visible.cancelLoyalty ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.cancelLoyalty && (
          <div className="faq-answer">
            Yes, you can cancel your participation in the loyalty program at any
            time. Please contact our customer support team to initiate the
            cancellation process.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyaltyRestriction")}
        >
          Are there any restrictions on who can join the loyalty program?
          <span className="toggle-icon">
            {visible.loyaltyRestriction ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyaltyRestriction && (
          <div className="faq-answer">
            No, there are no specific restrictions on who can join the loyalty
            program. It is open to individuals who meet the eligibility criteria
            set by the participating merchants.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("loyaltyPayDirect")}
        >
          Can I use loyalty points to pay for purchases or services directly?
          <span className="toggle-icon">
            {visible.loyaltyPayDirect ? "-" : "+"}
          </span>
        </div>
        {/* Placeholder for the answer */}
        {visible.loyaltyPayDirect && (
          <div className="faq-answer">
            The usage of loyalty points for payment may vary depending on the
            participating merchant and their loyalty program terms. Some
            programs offer the option to use points as currency for eligible
            transactions. Check the specific terms and conditions for details.
          </div>
        )}
      </div>

      <div className="faq-section">
        <div
          className="faq-question"
          onClick={() => toggleVisibility("appoinments")}
        >
          Do I need to make an appointment or reservation to access loyalty
          program benefits?
          <span className="toggle-icon">{visible.appoinments ? "-" : "+"}</span>
        </div>
        {/* Placeholder for the answer */}
        {visible.appoinments && (
          <div className="faq-answer">
            The process for accessing loyalty program benefits depends on the
            specific merchant and their offerings. Some benefits may require
            advance reservations or appointments, while others may be available
            directly during your visit. Check the details provided by the
            participating merchants.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
