// src/pages/Pricing.jsx
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <h2 className="section-title">Explore our Wedding invitation website packages</h2>

      <div className="pricing-cards">
        {/* Silver Package */}
        <div className="card silver">
          <div className="card-header">
            <h3>Silver Package</h3>
            <p className="price">₹4000 <span>Only</span></p>
          </div>
          <ul>
            <li>Infographic Event details</li>
            <li>Countdown Timer</li>
            <li>Pre-wedding Gallery</li>
            <li>Map Location</li>
            <li>Background Music</li>
            <li>Free QR Code</li>
            <li>15 Days Validity</li>
            <li>Amantrran domain link</li>
          </ul>
          <a href="https://wa.me/919999999999" className="whatsapp-btn" target="_blank">WhatsApp Us</a>
        </div>

        {/* Gold Package */}
        <div className="card gold popular">
          <div className="card-header">
            <h3>Golden Package</h3>
            <p className="price">₹6000 <span>Only</span></p>
          </div>
          <ul>
            <li>Everything in Silver plan</li>
            <li>Custom Domain</li>
            <li>Guest Wishes</li>
            <li>Google/WhatsApp Reminder Feature</li>
            <li>Automated WhatsApp Invite (Upto 300 Guests)</li>
            <li>Password Protection</li>
            <li>365 Days Validity</li>
          </ul>
          <a href="https://wa.me/919999999999" className="whatsapp-btn" target="_blank">WhatsApp Us</a>
        </div>

        {/* Diamond Package */}
        <div className="card diamond">
          <div className="card-header">
            <h3>Diamond Package</h3>
            <p className="price">₹7000 <span>Only</span></p>
          </div>
          <ul>
            <li>Everything in Golden plan</li>
            <li>RSVP Form</li>
            <li>Free Wedding Filter (Bundle Package)</li>
            <li>Upload Photos Feature (Post Wedding)</li>
            <li>Filter Integration</li>
            <li>Free Filter QR Tent Cards (24)</li>
          </ul>
          <a href="https://wa.me/919999999999" className="whatsapp-btn" target="_blank">WhatsApp Us</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
