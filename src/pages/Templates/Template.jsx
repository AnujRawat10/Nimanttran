// Template.jsx
import { useEffect, useRef, useState } from "react";
import "./Template.css";
import MapSection from "../../component/MapSection";

const Template = () => {
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
    <div className="wedding-template">
      <audio ref={audioRef} loop>
        <source src="/assets/mixkit-ill-always-remember-806.mp3" type="audio/mpeg" />
      </audio>
      <button className="music-button" onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <section className="hero-section">
        <div className="overlay">
          <h2 className="subtitle">THE WEDDING CELEBRATION OF</h2>
          <h1 className="title">Ryan & Emily</h1>
          <p className="date1">22<sup>th</sup> October, 2025</p>
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
      <h4>Ryan</h4>
      <p>What can I say, she is amazing... She is my forever.</p>
      <img src="/groom.png" alt="Groom" className="person-photo" />
    </div>

    <div className="person bride">
      <h3>THE BRIDE</h3>
      <h4>Emily</h4>
      <p>I realized how much I miss him. I never wanted to be without him again!</p>
      <img src="/bride.png" alt="Bride" className="person-photo" />
    </div>
  </div>
</section>


      <section className="quote-section">
        <blockquote>
          "To love is nothing. To be loved is something. But to love and be loved, that's everything."
          <cite>T. Tolis</cite>
        </blockquote>
      </section>
      <section className="ceremony-section">
        <div className="ceremony-card">
          <h3>HALDI</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 12:00 PM</p>
          <p>Venue: Pushp Villa, Udaipur</p>
        </div>
        <div className="ceremony-card">
          <h3>MEHANDI</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 03:00 PM</p>
          <p>Venue: Pushp Villa, Udaipur</p>
        </div>
        <div className="ceremony-card">
          <h3>SANGEET</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        <div className="ceremony-card">
          <h3>SANGEET</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        <div className="ceremony-card">
          <h3>SANGEET</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        <div className="ceremony-card">
          <h3>SANGEET</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        
      </section>

      <section className="gallery-section">
        <h2 style ={{textAlign: "center" , marginBottom: "40px" }}>OUR LOVELY MOMENTS</h2>
        <div className="gallery">
  <div className="gallery-img">
    <img src="/Couplephotos/c1.jpeg" alt="Gallery 1" />
  </div>
          <div className="gallery-img">
            <img src="/Couplephotos/c2.jpeg" alt="Gallery 2" />
          </div>
          <div className="gallery-img">
            <img src="/Couplephotos/c6.jpeg" alt="Gallery 3" />
          </div>
          <div className="gallery-img">
            <img src="/Couplephotos/c4.jpeg" alt="Gallery 4" />
          </div>
          <div className="gallery-img">
            <img src="/Couplephotos/c5.jpeg" alt="Gallery 5" />
          </div>
          <div className="gallery-img">
            <img src="/Couplephotos/c3.jpeg" alt="Gallery 2" />
          </div>
        </div>
      </section>

      <section className="venue-section">
        <h2>WEDDING VENUE</h2>
        <p>Orbit Resort, Udaipur - Rajasthan</p>
        <div className="map-placeholder">
          <MapSection />
        </div>
      </section>
      <section className="rsvp-section">
        <h2>RSVP</h2>
        <ul>
          <li>Mr. Puran Sharma</li>
          <li>Mr. Dilip Kumar & Mrs. Riya Sharma</li>
          <li>Mr. Shyam & Mrs. Tanvi Sharma</li>
          <li>Mr. Rajesh Kumar & Mrs. Rekha Sharma</li>
          <li>Mr. Ved Kumar & Mrs. Seema Sharma</li>
          <li>& All Sharma Family</li>
        </ul>
        <p className="footer-tag">#RyanWedsEmily</p>
        <p className="footer-message">WE LOOK FORWARD TO CELEBRATE WITH YOU ON OUR BIG DAY!</p>
      </section>
    </div>
  );
};
export default Template;
