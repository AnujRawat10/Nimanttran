"use client"

import { useState } from "react"
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isRecaptchaChecked) {
      alert("Please verify that you are not a robot")
      return
    }
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleGetDirections = () => {
    // Redirect to Google Maps with the specific location
    const address = "C-209, Second Floor, Shri Gowardhan Complex, Sahakari Bazar Rd., Mandsaur (M.P.) 458001"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+917000921608")
  }

  const handleEmailClick = () => {
    window.open("mailto:business@amantran.com")
  }

  return (
    <div className="contact-container">
      {/* Main Contact Section */}
      <div className="contact-section">
        <h1 className="contact-title">Get In touch</h1>

        <div className="contact-content">
          {/* Form Section */}
          <div className="form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="recaptcha-section">
                <label className="recaptcha-container">
                  <input
                    type="checkbox"
                    checked={isRecaptchaChecked}
                    onChange={(e) => setIsRecaptchaChecked(e.target.checked)}
                    className="recaptcha-checkbox"
                  />
                  <span className="checkmark"></span>
                  I'm not a robot
                </label>
                <div className="recaptcha-logo">
                  <span>reCAPTCHA</span>
                  <div className="recaptcha-icon"></div>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="info-section">
            <div className="contact-info">
              <div className="phone-section">
                <div className="phone-icon">📱</div>
                <a href="tel:+917000921608" className="phone-number" onClick={handlePhoneClick}>
                  +91 7000921608
                </a>
              </div>

              <div className="email-section">
                <span className="email-label">Email : </span>
                <a href="mailto:business@amantran.com" className="email-address" onClick={handleEmailClick}>
                  business@amantran.com
                </a>
              </div>

              <div className="address-section">
                <span className="address-label">Visit us: </span>
                <span className="address-text">
                  C-209, Second Floor, Shri Gowardhan Complex, Sahakari Bazar Rd., Mandsaur (M.P.) 458001
                </span>
              </div>

              <div className="social-section">
                <h3 className="social-title">Connect with us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon instagram">
                    <span>📷</span>
                  </a>
                  <a href="#" className="social-icon whatsapp">
                    <span>💬</span>
                  </a>
                  <a href="#" className="social-icon youtube">
                    <span>📺</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="map-section">
        <h2 className="map-title">Our Location</h2>
        <div className="map-container">
          <div className="map-content">
            <div className="map-info">
              <div className="office-details">
                <div className="office-header">
                  <span className="office-icon">🏢</span>
                  <h3>Head Office</h3>
                </div>
                <p className="office-address">
                  Office No - SF - 05E, 2nd Floor, Riverview Arcade Plot No - 4/17, Sector 4, Gomti Nagar Extension,
                  Lucknow, Uttar Pradesh 226010
                </p>
                <div className="map-actions">
                  <button className="directions-btn" onClick={handleGetDirections}>
                    🧭 Get Directions
                  </button>
                  <button className="call-btn" onClick={handlePhoneClick}>
                    📞 Call Office
                  </button>
                </div>
              </div>
            </div>
            <div className="map-display">
              <div className="map-placeholder">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-50WWkd9gKHBUyTdPBc3ViyLCjboyDE.png"
                  alt="Google Maps Location"
                  className="map-image"
                />
                <div className="map-overlay" onClick={handleGetDirections}>
                  <div className="map-marker">📍</div>
                  <p>Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
