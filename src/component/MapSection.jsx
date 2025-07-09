import React from 'react';
import './MapSection.css';

const MapSection = () => {
  const googleMapsLink = 'https://www.google.com/maps/place/Connaught+Place,+New+Delhi';
  const phoneNumber = '+919205110208';
  const address = 'Connaught Place, New Delhi, Delhi 110001, India';

  return (
    <section className="map-container">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.15086135865!2d77.06889742130945!3d28.52728034087225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3fbf2d96f7%3A0x44f4ae1d17261c4e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sin!4v1719572256730!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="map-overlay">
        <div className="map-address">{address}</div>
        <div className="map-buttons">
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-btn">Get Directions</a>
          <a href={`tel:${phoneNumber}`} className="map-btn secondary">Call</a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
