import React from 'react';
import './Template3.css';
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Template3 = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-10-22T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
  
    <div className="wedding-template">
      <audio ref={audioRef} loop>
        <source src="src/assets/mixkit-ill-always-remember-806.mp3" type="audio/mpeg" />
      </audio>
      <button className="music-button" onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      </div>
    {/* <div className="template-wrapper"> */}
      {/* Hero Section */}
      <div className="hero-section3">
        <div className="overlay">
          <h1 className="hero-title">Suraj & Neha</h1>
          <p className="hero-subtitle">ARE GOING TO TIE THE KNOT</p>
          <p className="hero-date">ON<br/>22TH OCTOBER, 2025</p>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown-section">
        <div className="countdown-banner">
          <strong>Don't miss the full experience</strong>
          <p>Scroll till the end to explore all features and order details.</p>
        </div>
        <div className="countdown-values">
          <div className="unit"><span>{timeLeft.days}</span><small>Days</small></div>
          <div className="unit"><span>{timeLeft.hours}</span><small>Hours</small></div>
          <div className="unit"><span>{timeLeft.minutes}</span><small>Minutes</small></div>
          <div className="unit"><span>{timeLeft.seconds}</span><small>Seconds</small></div>
        </div>
      </div>

      {/* Couple Info */}
      <div className="couple-info-section">
        <div className="person3">
          <h2>Suraj</h2>
          <p>G/S Shri chandarmal Ji - Late Chandrakuvar bai</p>
          <p>S/O Vinod - Anita Patil</p>
        </div>
        <div className="couple-image">
          <img src="/Forever.png" alt="Couple" />
        </div>
        <div className="person3">
          <h2>Neha</h2>
          <p>G/D Late Shri Rajaji - Late Kanta bai</p>
          <p>D/O Manish - Sunita Patil</p>
        </div>
      </div>

      {/* Venue */}
      <div className="venue-section">
        <h2>Wedding Venue</h2>
        <p>HOTEL GRAND PADMAWATI, AHMEDABAD (G.J.)</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.246706204293!2d72.57136281496484!3d23.02450118495448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f66c1e5c05%3A0xf21641769d088b88!2sAhmedabad!5e0!3m2!1sen!2sin!4v1616947202974!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Ahmedabad Map"
        ></iframe>
      </div>

      {/* Blessings */}
      <div className="blessings-section">
        <h2>Blessings</h2>
        <p className="message">Best wishes on this wonderful journey, as you build your new lives together.</p>
        <p className="from">Karan</p>
      </div>

      <div className="gallery-section3">
  <h2 style={{ textAlign: "center", marginBottom: "40px" }}>OUR LOVELY MOMENTS</h2>
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
  >
    <SwiperSlide><img src="/Couplephotos/c1.jpeg" alt="Gallery 1" /></SwiperSlide>
    <SwiperSlide><img src="/Couplephotos/c2.jpeg" alt="Gallery 2" /></SwiperSlide>
    <SwiperSlide><img src="/Couplephotos/c6.jpeg" alt="Gallery 3" /></SwiperSlide>
    <SwiperSlide><img src="/Couplephotos/c4.jpeg" alt="Gallery 4" /></SwiperSlide>
    <SwiperSlide><img src="/Couplephotos/c5.jpeg" alt="Gallery 5" /></SwiperSlide>
    <SwiperSlide><img src="/Couplephotos/c3.jpeg" alt="Gallery 6" /></SwiperSlide>
  </Swiper>
</div>


      {/* Share Wishes */}
      <div className="share-wishes-section">
        <h2>Share your wishes</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Whatsapp No." />
          <textarea placeholder="Your Wishes ( Emoji are supported )" />
          <button type="submit">Send your wishes</button>
        </form>
        <p className="note">
          You will Receive Automated Wish Confirmation via WhatsApp.<br />
          Only your Name & Wish will be displayed above.
        </p>
    </div>
    </>
  );
};

export default Template3;