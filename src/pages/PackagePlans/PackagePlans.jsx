import React from 'react';
import './PackagePlans.css';

const PackagePlans = () => {
  return (
    <section className="package-section">
      <h2 className="price-section-title">Explore our Wedding invitation website packages</h2>

      <div className="packages-container">
        {/* SILVER */}
        <div className="package-card silver">
          <div className="ribbon black">POPULAR</div>
          {/* <h3>Silver Package</h3> */}
          <p className="price">₹ <span>4000</span> <br />Only</p>
          <ul>
            <li>✅ Infographic Event details</li>
            <li>✅ Countdown Timer</li>
            <li>✅ Pre-wedding Gallery</li>
            <li>✅ Map Location</li>
            <li>✅ Background Music</li>
            <li>✅ Free QR Code</li>
            <li>✅ 15 Days validity post wedding</li>
            <li>✅ Amantrran domain link</li>
          </ul>
          <a className="whatsapp-btn" href="https://wa.me/919205110208" target="_blank">WhatsApp Us</a>
          <p className="note">No hidden charges. Invitation link will be like<br /><strong>www.nimanttran.com/BrideWedsGroom</strong><br />( Example )</p>
        </div>

        {/* GOLDEN */}
        <div className="package-card gold">
          <div className="ribbon black">BEST SELLER</div>
          {/* <h3>Golden Package</h3> */}
          <p className="price">₹ <span>6000</span> <br />Only</p>
          <ul>
            <li>✅ Everything in Silver plan</li>
            <li>➕ Custom Domain</li>
            <li>➕ Guest Wishes</li>
            <li>➕ Google/WhatsApp Reminder Feature</li>
            <li>➕ Automated WhatsApp Invite (Upto 300 Guests)</li>
            <li>➕ Password Protection</li>
            <li>➕ 365 Days Validity</li>
          </ul>
          <a className="whatsapp-btn" href="https://wa.me/919205110208" target="_blank">WhatsApp Us</a>
          <p className="note">No hidden charges. Invitation link will be like<br /><strong>www.BrideWedsGroom.com</strong><br />( Example )</p>
        </div>

        {/* DIAMOND */}
        <div className="package-card diamond">
          <div className="ribbon green">RECOMMENDED</div>
          {/* <h3>Diamond Package</h3> */}
          <p className="price">₹ <span>7000</span> <br />Only</p>
          <ul>
            <li>✅ Everything in Golden plan</li>
            <li>➕ RSVP Form</li>
            <li>➕ Free Wedding Filter (Bundle Package)</li>
            <li>➕ Upload Photos Feature (Post wedding)</li>
            <li>➕ Filter Integration</li>
            <li>➕ Free Filter QR Tent cards (24)</li>
          </ul>
          <a className="whatsapp-btn" href="https://wa.me/919205110208" target="_blank">WhatsApp Us</a>
          <p className="note">No hidden charges. RSVP details will be made available via Whatsapp/Email.</p>
        </div>
      </div>
    </section>
  );
};

export default PackagePlans;
