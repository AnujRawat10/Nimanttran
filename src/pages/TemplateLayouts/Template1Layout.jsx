// Template1Layout.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Template1Layout.css";

const Template1Layout = ({ data }) => {
  const {
    groomName,
    brideName,
    weddingDate,
    ceremonies,
    venue,
    rsvp,
    galleryImages = [],
    couplePhotos = [],
    musicUrl,
    groomQuote,
    brideQuote,
    quoteText,
    hashtag,
    mapLink ,
  } = data;

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date(weddingDate).getTime();
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
  }, [weddingDate]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const groomImage = couplePhotos?.[0] ? `http://localhost:5000/${couplePhotos[0]}` : null;
  const brideImage = couplePhotos?.[1] ? `http://localhost:5000/${couplePhotos[1]}` : null;

  return (
    <div className="wedding-template">
      {musicUrl && (
        <>
          <audio ref={audioRef} loop src={`http://localhost:5000/${musicUrl}`} />
          <button className="music-button" onClick={toggleAudio}>
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </>
      )}

      <section className="hero-section">
        <div className="overlay">
          <h2 className="subtitle">THE WEDDING CELEBRATION OF</h2>
          <h1 className="title">{groomName} & {brideName}</h1>
          <p className="date">{new Date(weddingDate).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="countdown-section">
        <h2 className="section-heading">OUR FOREVER STARTS IN</h2>
        <div className="countdown">
          <div className="unit"><span>{timeLeft.days}</span><small>Days</small></div>
          <div className="unit"><span>{timeLeft.hours}</span><small>Hours</small></div>
          <div className="unit"><span>{timeLeft.minutes}</span><small>Minutes</small></div>
          <div className="unit"><span>{timeLeft.seconds}</span><small>Seconds</small></div>
        </div>
      </section>

      <section className="couple-section">
        <div className="couple-container">
          <div className="person groom">
            <h3>THE GROOM</h3>
            <h4>{groomName}</h4>
            <p>{groomQuote}</p>
            {groomImage && (
                <img src={groomImage} alt={`${groomName}`} className="photo groom-photo" />
            //   <div className="photo groom-photo" style={{ backgroundImage: `url(${groomImage})` }} />
            )}
          </div>
          <div className="person bride">
            <h3>THE BRIDE</h3>
            <h4>{brideName}</h4>
            <p>{brideQuote}</p>
            {brideImage && (
                <img src={brideImage} alt={`${brideName}`} className="photo bride-photo" />
            //   <div className="photo bride-photo" style={{ backgroundImage: `url(${brideImage})` }} />
            )}
          </div>
        </div>
      </section>

      {quoteText && (
        <section className="quote-section">
          <blockquote>
            {quoteText}
            <cite>{groomName} & {brideName}</cite>
          </blockquote>
        </section>
      )}

      <section className="ceremony-section">
        {ceremonies?.map((event, idx) => (
          <div key={idx} className="ceremony-card">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Venue: {event.venue}</p>
          </div>
        ))}
      </section>

      <section className="gallery-section">
        <h2>OUR LOVELY MOMENTS</h2>
        <div className="gallery">
          {galleryImages.map((url, idx) => (
            <div className="template-gallery-img" key={idx}>
              <img src={`http://localhost:5000/${url}`} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="venue-section">
        <h2>WEDDING VENUE</h2>
        <p>{venue}</p>
        {mapLink && (
          <div className="map-placeholder">
            <iframe
              src={mapLink}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Wedding Map"
            ></iframe>
          </div>
        )}
      </section>

      <section className="rsvp-section">
        <h2>RSVP</h2>
        <ul>
          {rsvp?.map((name, idx) => <li key={idx}>{name}</li>)}
        </ul>
        {hashtag && <p className="footer-tag">#{hashtag}</p>}
        <p className="footer-message">WE LOOK FORWARD TO CELEBRATE WITH YOU ON OUR BIG DAY!</p>
      </section>
    </div>
  );
};

export default Template1Layout;
