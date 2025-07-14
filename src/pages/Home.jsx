import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import heroBanner from "/assets/Banner.jpg";
import template1 from "/assets/TEMPLATE1.png";
import template2 from "/assets/TEMPLATE2.png";
import template3 from "/assets/TEMPLATE3.png";
import filterImg from "/assets/Scanner.png";
import galleryImg from "/assets/TEMPLATE1.png";
import featuresImg from "/assets/WEDDING_INVITE.png";


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <div className="logo-hindi">आमंत्रण</div>
            <div className="logo-eng">WEB INVITATIONS</div>
          </div>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header> */}
      <div className="home">
        {/* Hero Section */}
        <div className="home">
  {/* Hero Section */}
  <section className="hero" data-aos="fade-up">
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={heroBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Optional overlay content */}
      <div style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', top: '40%' }}>
        <h1>Welcome to Nimantrran.com</h1>
        <p>Scroll down to explore</p>
      </div>
    </div>
  </section>

</div>


        {/* Templates */}
        <section className="templates" data-aos="fade-up">
          <h2>A Simple, Beautiful Wedding Website Just For You</h2>
          <p>Choose your favourite template and we will do our magic.</p>
          <div className="template-grid">
            <div className="template-card" data-aos="zoom-in">
              <img src={template1} alt="Template 1" />
              <h3>Elegant Gold</h3>
              <p>Royal theme with golden hues and subtle elegance.</p>
            </div>
            <div className="template-card" data-aos="zoom-in">
              <img src={template2} alt="Template 2" />
              <h3>Floral Festive</h3>
              <p>Fresh florals and vibrant layout for a joyful invite.</p>
            </div>
            <div className="template-card" data-aos="zoom-in">
              <img src={template3} alt="Template 3" />
              <h3>Minimal Charm</h3>
              <p>Clean and modern design with pastel highlights.</p>
            </div>
          </div>
        </section>

        {/* Smart Features (Center aligned after switch) */}
        <section className="features" data-aos="fade-up">
          <div className="feature-block centered">
            <img src={featuresImg} alt="Features" />
            <div className="feature-text">
              <h3>Smart Features</h3>
              <p>
                From RSVP to Google Maps, music, countdown and more —
                experience all modern wedding site features, beautifully packed.
              </p>
            </div>
          </div>
        </section>

        {/* Snapchat Filters (Switched) */}
        <section className="filters" data-aos="fade-up">
          <div className="filters-img">
            <img src={filterImg} alt="Wedding Filter" />
          </div>
          <div className="filters-text">
            <h3>Snapchat & QR Filters</h3>
            <p>
              Surprise your guests with custom photo filters and scan codes that
              make your wedding stand out digitally!
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="features" data-aos="fade-up">
          <div className="feature-block">
            <img src={galleryImg} alt="Gallery" />
            <div className="feature-text">
              <h3>Photo Gallery</h3>
              <p>
                Share pre-wedding photos, candid moments and ceremony glimpses
                in your personal wedding album.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats" ref={ref} data-aos="fade-up">
          <h2>Amantrran's Numbers</h2>
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">
                {inView && <CountUp end={10} duration={2} />}+
              </div>
              <div className="stat-label">Templates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {inView && <CountUp end={100} duration={2} />}+
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {inView && <CountUp end={13800} duration={3} />}+
              </div>
              <div className="stat-label">Invites Sent</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {inView && <CountUp end={125} duration={2} />}+
              </div>
              <div className="stat-label">Partners</div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="highlights" data-aos="fade-up">
          <div className="highlight">
            <i className="fas fa-cogs"></i>
            <h4>No Technical Skills</h4>
            <p>We build it for you. No tech knowledge needed.</p>
          </div>
          <div className="highlight">
            <i className="fas fa-signal"></i>
            <h4>99.99% Uptime</h4>
            <p>Reliable hosting with zero downtime.</p>
          </div>
          <div className="highlight">
            <i className="fas fa-shipping-fast"></i>
            <h4>Fast Delivery</h4>
            <p>Get your site in 5–7 business days.</p>
          </div>
          <div className="highlight">
            <i className="fas fa-headset"></i>
            <h4>Support</h4>
            <p>We help you send it out smoothly.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How do I get started with Amantrran?</summary>
            <p>
              Just pick your favorite template, fill out the form, and we'll take
              care of the rest!
            </p>
          </details>
          <details>
            <summary>Can I customize my wedding website?</summary>
            <p>
              Absolutely! Each template can be customized to match your style and
              story.
            </p>
          </details>
          <details>
            <summary>How long does it take to get my site?</summary>
            <p>
              Typically 5–7 business days after we receive all the necessary
              details.
            </p>
          </details>
          <details>
            <summary>Is there support available?</summary>
            <p>
              Yes, we provide full support from start to launch — just message us
              anytime!
            </p>
          </details>
        </section>
      </div>
    </>
  );
}

export default Home;
