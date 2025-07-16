"use client"

import { useState, useEffect, useRef } from "react"
import "./MobileCarousel.css"

const MobileCarousel = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0)
  const autoSlideRef = useRef(null)

  const templates = [
    {
      id: 1,
      title: "The Wedding Day",
      subtitle: "The day when we will tie the knot and begin our new life as a happily married couple",
      date: "Saturday, 10th March, 2022",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      textColor: "#333",
      countdown: "04 4 18 30",
      countdownLabels: "DAYS HOURS MINUTES SECONDS",
    },
    {
      id: 2,
      title: "Karan & Nisha",
      subtitle: "|| Shri Ganeshaye Namah ||",
      familyText: "OUR FAMILIES REQUEST THE HONOUR OF YOUR PRESENCE AT",
      date: "Our Wedding",
      background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
      textColor: "#fff",
    },
    {
      id: 3,
      title: "Ryan & Emily",
      subtitle: "THE WEDDING CELEBRATION OF",
      date: "DECEMBER 17, 2022",
      background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
      textColor: "#fff",
      rose: "🌹",
    },
    {
      id: 4,
      title: "Sally & Mark",
      subtitle: "WE ARE GETTING MARRIED",
      date: "August 28th 2020",
      background: "linear-gradient(135deg, #8b7355 0%, #a0956b 100%)",
      textColor: "#fff",
      saveDate: true,
    },
    {
      id: 5,
      title: "Mehendi Ceremony",
      subtitle:
        "The Mehendi Ceremony is one such event that is an indispensable part of the wedding celebrations. Mehendi ceremony generally refers to application of a henna paste in elaborate, intricate designs on the bride's hands and feet",
      date: "FRIDAY, MARCH 8, 2022",
      time: "08 PM ONWARDS",
      venue: "HOTEL GRAND JBR, MUMBAI",
      background: "linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)",
      textColor: "#fff",
      mehendi: true,
    },
  ]

  // Static content for side phones
  const staticPhones = [
    {
      title: "The Wedding Day",
      subtitle: "The day when we will tie the knot and begin our new life as a happily married couple",
      date: "Saturday, 10th March, 2022",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      textColor: "#333",
      countdown: "04 4 18 30",
    },
    {
      title: "Karan & Nisha",
      subtitle: "|| Shri Ganeshaye Namah ||",
      familyText: "OUR FAMILIES REQUEST THE HONOUR OF YOUR PRESENCE AT",
      background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
      textColor: "#fff",
    },
    {
      title: "Sally & Mark",
      subtitle: "WE ARE GETTING MARRIED",
      date: "August 28th 2020",
      background: "linear-gradient(135deg, #8b7355 0%, #a0956b 100%)",
      textColor: "#fff",
      saveDate: true,
    },
    {
      title: "Mehendi Ceremony",
      subtitle: "The Mehendi Ceremony is one such event...",
      date: "FRIDAY, MARCH 8, 2022",
      background: "linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)",
      textColor: "#fff",
      mehendi: true,
    },
  ]

  // Auto change center content every 5 seconds
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % templates.length)
    }, 5000)

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [])

  const renderPhoneContent = (template, isCenter = false) => {
    return (
      <div className="phone-screen" style={{ background: template.background }}>
        <div className="invitation-content" style={{ color: template.textColor }}>
          {template.countdown && (
            <div className="countdown-section">
              <div className="countdown-numbers">{template.countdown}</div>
              <div className="countdown-labels">DAYS HOURS MINUTES SECONDS</div>
            </div>
          )}

          {template.familyText && <div className="family-text">{template.familyText}</div>}

          {template.rose && <div className="rose-icon">{template.rose}</div>}

          <div className="main-content">
            {template.subtitle && <p className="subtitle">{template.subtitle}</p>}
            <h1 className="main-title">{template.title}</h1>
            {template.date && <div className="date-info">{template.date}</div>}

            {template.saveDate && <button className="save-date-btn">OUR STORY</button>}

            {template.time && (
              <div className="event-details">
                <div className="time">{template.time}</div>
                <div className="venue">{template.venue}</div>
              </div>
            )}

            {template.mehendi && (
              <div className="mehendi-hands">
                <div className="hand-design">🤲</div>
              </div>
            )}
          </div>

          {template.familyText && <div className="scroll-down">⌄</div>}
        </div>
      </div>
    )
  }

  return (
    <section className="mobile-showcase">
      <div className="phones-stack">
        {/* Phone 1 - Far Left */}
        <div className="phone-container phone-1">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              {renderPhoneContent(staticPhones[0])}
            </div>
          </div>
        </div>

        {/* Phone 2 - Left */}
        <div className="phone-container phone-2">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              {renderPhoneContent(staticPhones[1])}
            </div>
          </div>
        </div>

        {/* Phone 3 - CENTER (Active/Changing) */}
        <div className="phone-container phone-center">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              {renderPhoneContent(templates[currentTemplate], true)}
            </div>
          </div>
        </div>

        {/* Phone 4 - Right */}
        <div className="phone-container phone-4">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              {renderPhoneContent(staticPhones[2])}
            </div>
          </div>
        </div>

        {/* Phone 5 - Far Right */}
        <div className="phone-container phone-5">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              {renderPhoneContent(staticPhones[3])}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="whatsapp-button">
        <div className="whatsapp-icon">💬</div>
        <span>Order on WhatsApp</span>
      </div> */}
    </section>
  )
}

export default MobileCarousel
