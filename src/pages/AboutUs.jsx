import React from "react";
import "./AboutUs.css";
import ghibliImage from "../assets/AboutUs.png"; // Replace with your image

const AboutUs = () => {
  return (
    <div className="about-us" style={{ backgroundImage: `url(${ghibliImage})` }}>
      <div className="about-overlay">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are passionate creators who believe in the magic of storytelling. Inspired by the art
            and spirit of Studio Ghibli, our mission is to bring whimsical experiences to life through
            every visual and narrative we craft.
          </p>
          <p>
            Our team values imagination, emotional depth, and timeless design — rooted in wonder and
            human connection. We invite you to step into a world of creativity and meaning.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;