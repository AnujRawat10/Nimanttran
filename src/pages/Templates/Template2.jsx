"use client"

import { useEffect, useRef, useState } from "react"
import "./Template2.css"
import {FaInstagram ,FaPhone, FaFacebook, FaEnvelope, FaLocationArrow, FaTwitter} from "react-icons/fa"
import MapSection from "../../component/MapSection"

const Template2 = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const targetDate = new Date("2025-10-22T00:00:00").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="template2-wedding-template">
      <audio ref={audioRef} loop>
        <source src="src/assets/mixkit-ill-always-remember-806.mp3" type="audio/mpeg" />
      </audio>

      <button className="template2-music-button" onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <section
        className="template2-hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="template2-overlay">
          <h2 className="template2-subtitle">THE WEDDING CELEBRATION OF</h2>
          <h1 className="template2-title">Ryan & Emily</h1>
          <p className="template2-date">
            22<sup>th</sup> October, 2025
          </p>
        </div>
      </section>

      <section className="template2-countdown-section">
        <h2 className="template2-section-heading">OUR FOREVER STARTS IN</h2>
        <div className="template2-countdown">
          <div className="template2-unit">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>
          <div className="template2-unit">
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>
          <div className="template2-unit">
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>
          <div className="template2-unit">
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      </section>

      <section className="template2-couple-section">
        <div className="template2-couple-container">
          <div className="template2-person template2-groom">
            <h3>THE GROOM</h3>
            <h4>Ryan</h4>
            <p>What can I say, she is amazing... She is my forever. She is my everything.</p>
            <img
              src="/groom.jpeg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Groom"
              className="template2-person-photo"
            />
          </div>
          <div className="template2-person template2-bride">
            <h3>THE BRIDE</h3>
            <h4>Emily</h4>
            <p>I realized how much I miss him. I never wanted to be without him again!</p>
            <img
              src="/bride.jpeg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Bride"
              className="template2-person-photo"
            />
          </div>
        </div>
      </section>

      <section className="template2-love-story-section">
        <h2 className="template2-section-heading">OUR LOVE STORY</h2>
        <div className="template2-story-timeline">
          <div className="template2-story-item">
            <div className="template2-story-year">2020</div>
            <div className="template2-story-content">
              <h3>First Met</h3>
              <p>
                We met at a coffee shop on a rainy Tuesday morning. Little did we know it would change our lives
                forever.
              </p>
            </div>
          </div>
          <div className="template2-story-item">
            <div className="template2-story-year">2022</div>
            <div className="template2-story-content">
              <h3>First Date</h3>
              <p>Our first official date was at the local park where we talked for hours under the stars.</p>
            </div>
          </div>
          <div className="template2-story-item">
            <div className="template2-story-year">2024</div>
            <div className="template2-story-content">
              <h3>The Proposal</h3>
              <p>Ryan proposed during a sunset walk on the beach, and Emily said yes with tears of joy!</p>
            </div>
          </div>
          <div className="template2-story-item">
            <div className="template2-story-year">2025</div>
            <div className="template2-story-content">
              <h3>Wedding Day</h3>
              <p>And now we're ready to say "I do" surrounded by our loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="template2-quote-section">
        <blockquote>
          "To love is nothing. To be loved is something. But to love and be loved, that's everything."
          <cite>T. Tolis</cite>
        </blockquote>
      </section>

      <section className="template2-wedding-party-section">
        <h2 className="template2-section-heading">OUR WEDDING PARTY</h2>
        <div className="template2-party-container">
          <div className="template2-party-group">
            <h3>BRIDESMAIDS</h3>
            <div className="template2-party-members">
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Bridesmaid 1"
                />
                <h4>Sarah Johnson</h4>
                <p>Maid of Honor</p>
              </div>
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Bridesmaid 2"
                />
                <h4>Lisa Chen</h4>
                <p>Bridesmaid</p>
              </div>
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Bridesmaid 3"
                />
                <h4>Maria Garcia</h4>
                <p>Bridesmaid</p>
              </div>
            </div>
          </div>
          <div className="template2-party-group">
            <h3>GROOMSMEN</h3>
            <div className="template2-party-members">
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Groomsman 1"
                />
                <h4>Mike Wilson</h4>
                <p>Best Man</p>
              </div>
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Groomsman 2"
                />
                <h4>David Brown</h4>
                <p>Groomsman</p>
              </div>
              <div className="template2-party-member">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Groomsman 3"
                />
                <h4>James Miller</h4>
                <p>Groomsman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="template2-ceremony-section">
        <div className="template2-ceremony-card">
          <h3>HALDI</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 12:00 PM</p>
          <p>Venue: Pushp Villa, Udaipur</p>
        </div>
        <div className="template2-ceremony-card">
          <h3>MEHANDI</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 03:00 PM</p>
          <p>Venue: Pushp Villa, Udaipur</p>
        </div>
        <div className="template2-ceremony-card">
          <h3>SANGEET</h3>
          <p>Date: 21 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        <div className="template2-ceremony-card">
          <h3>WEDDING</h3>
          <p>Date: 22 October, 2025</p>
          <p>Time: 10:00 AM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
        <div className="template2-ceremony-card">
          <h3>RECEPTION</h3>
          <p>Date: 22 October, 2025</p>
          <p>Time: 07:00 PM</p>
          <p>Venue: Orbit Resort, Udaipur</p>
        </div>
      </section>

      <section className="template2-gallery-section">
        <h2>OUR LOVELY MOMENTS</h2>
        <div className="template2-gallery">
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Gallery 1"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Gallery 2"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Gallery 3"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="/groom.jpeg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Gallery 4"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Gallery 5"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Gallery 6"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Gallery 7"
            />
          </div>
          <div className="template2-gallery-img">
            <img
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Gallery 8"
            />
          </div>
        </div>
      </section>

      {/* <section className="template2-accommodation-section">
        <h2 className="template2-section-heading">WHERE TO STAY</h2>
        <div className="template2-accommodation-container">
          <div className="template2-hotel-card">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Hotel 1"
            />
            <div className="template2-hotel-info">
              <h3>The Oberoi Udaivilas</h3>
              <p>Luxury heritage hotel with lake views</p>
              <div className="template2-hotel-details">
                <span>⭐ 5 Star</span>
                <span>📍 2 km from venue</span>
                <span>💰 ₹15,000/night</span>
              </div>
            </div>
          </div>
          <div className="template2-hotel-card">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt="Hotel 2"
            />
            <div className="template2-hotel-info">
              <h3>Taj Lake Palace</h3>
              <p>Iconic palace hotel on Lake Pichola</p>
              <div className="template2-hotel-details">
                <span>⭐ 5 Star</span>
                <span>📍 3 km from venue</span>
                <span>💰 ₹12,000/night</span>
              </div>
            </div>
          </div>
          <div className="template2-hotel-card">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Hotel 3"
            />
            <div className="template2-hotel-info">
              <h3>Hotel Lakend</h3>
              <p>Comfortable stay with modern amenities</p>
              <div className="template2-hotel-details">
                <span>⭐ 3 Star</span>
                <span>📍 1 km from venue</span>
                <span>💰 ₹3,000/night</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="template2-gift-registry-section">
        <h2 className="template2-section-heading">GIFT REGISTRY</h2>
        <div className="template2-registry-container">
          <p>
            Your presence is the greatest gift, but if you wish to honor us with a gift, we've registered at these
            stores:
          </p>
          <div className="template2-registry-stores">
            <div className="template2-registry-store">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="Amazon"
              />
              <button className="template2-registry-btn">View Registry</button>
            </div>
            <div className="template2-registry-store">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1280px-Target_logo.svg.png"
                alt="Target"
              />
              <button className="template2-registry-btn">View Registry</button>
            </div>
            <div className="template2-registry-store">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Bed-Bath-Beyond-Logo.png"
                alt="Bed Bath & Beyond"
              />
              <button className="template2-registry-btn">View Registry</button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="template2-testimonials-section">
        <h2 className="template2-section-heading">WHAT PEOPLE SAY</h2>
        <div className="template2-testimonials-container">
          <div className="template2-testimonial-card">
            <div className="template2-testimonial-content">
              <p>"Ryan and Emily are perfect for each other. Their love story gives us all hope!"</p>
            </div>
            <div className="template2-testimonial-author">
              <img
                src="/bride.jpeg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Sarah"
              />
              <div>
                <h4>Sarah Johnson</h4>
                <span>Best Friend</span>
              </div>
            </div>
          </div>
          <div className="template2-testimonial-card">
            <div className="template2-testimonial-content">
              <p>"Watching them together, you can see they're meant to be. Congratulations!"</p>
            </div>
            <div className="template2-testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Mike"
              />
              <div>
                <h4>Mike Wilson</h4>
                <span>College Friend</span>
              </div>
            </div>
          </div>
          <div className="template2-testimonial-card">
            <div className="template2-testimonial-content">
              <p>"Two beautiful souls finding each other. We couldn't be happier for them!"</p>
            </div>
            <div className="template2-testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Parents"
              />
              <div>
                <h4>The Families</h4>
                <span>Proud Parents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="template2-venue-section">
        <h2>WEDDING VENUE</h2>
        <p>Orbit Resort, Udaipur - Rajasthan</p>
        <div className="template2-map-placeholder">
          <MapSection />
        </div>
      </section>

      <section className="template2-contact-section">
        <h2 className="template2-section-heading">GET IN TOUCH</h2>
        <div className="template2-contact-container">
          <div className="template2-contact-info">
            <h3>Contact Information</h3>
            <p> <FaPhone /> +91 9205110208</p>
            <p><FaEnvelope /> hello@delhidigital.co</p>
            <p><FaLocationArrow /> Delhi , India</p>
          </div>
          <div className="template2-social-media">
            <h3>Follow Our Journey</h3>
            <div className="template2-social-links">
              <a href="#" className="template2-social-link">
                <FaFacebook /> Facebook
              </a>
              <a href="#" className="template2-social-link">
                <FaInstagram /> Instagram
              </a>
              <a href="#" className="template2-social-link">
                <FaTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="template2-rsvp-section">
        <h2>RSVP</h2>
        <ul>
          <li>Mr. Puran Sharma</li>
          <li>Mr. Dilip Kumar & Mrs. Riya Sharma</li>
          <li>Mr. Shyam & Mrs. Tanvi Sharma</li>
          <li>Mr. Rajesh Kumar & Mrs. Rekha Sharma</li>
          <li>Mr. Ved Kumar & Mrs. Seema Sharma</li>
          <li>& All Sharma Family</li>
        </ul>
        <p className="template2-footer-tag">#RyanWedsEmily</p>
        <p className="template2-footer-message">WE LOOK FORWARD TO CELEBRATE WITH YOU ON OUR BIG DAY!</p>
      </section>
    </div>
  )
}

export default Template2
