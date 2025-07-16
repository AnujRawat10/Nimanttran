"use client"

import { FaInstagram, FaWhatsapp, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import WhatsAppButton from "../component/WhatsAppButton"

const Footer = ({
  inviteText = "Invite your guests with a cool website invitation",
  exploreButtonText = "Explore Designs",
  exploreButtonLink = "#",
  contactName = "Team Nimanttran",
  contactPhone = "+91 9205110208",
  socialLinks = {
    instagram: "#",
    whatsapp: "#",
    facebook: "#",
    // youtube: "#",
    // twitter: "#",
  },
  quickLinks = [
    { text: "Wedding Invitation Demo", link: "#" },
    { text: "Wedding Filters", link: "#" },
    { text: "Invitation Portfolio", link: "#" },
    { text: "contact us", link: "#" },
  ],
  moreInfoLinks = [
    { text: "About us", link: "#" },
    { text: "privacy policy", link: "#" },
    { text: "Terms & Conditions", link: "#" },
    { text: "How to order", link: "#" },
  ],
  companyName = "Nimanttran",
  projectBy = "Delhi Degital Co.",
  projectByLink = "https://delhidigital.co",
  // whatsappOrderText = "Order on WhatsApp",
  // whatsappOrderLink = "https://wa.me/9205110208",
}) => {
  const handlePhoneClick = () => {
    window.open(`tel:${contactPhone}`)
  }

  // const handleWhatsAppOrder = () => {
  //   window.open(whatsappOrderLink, "_blank")
  // }

  // const handleSocialClick = (platform, link) => {
  //   if (platform === "whatsapp") {
  //     window.open(`https://wa.me/${contactPhone.replace(/[^0-9]/g, "")}`, "_blank")
  //   } else {
  //     window.open(link, "_blank")
  //   }
  // }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Invitation */}
        <div className="footer-section invite-section">
          <h3 className="invite-text">{inviteText}</h3>
          <a href={exploreButtonLink} className="explore-btn">
            {exploreButtonText}
          </a>
        </div>

        {/* Center Section - Connect */}
        <div className="footer-section connect-section">
          <h3 className="section-title">Connect with us</h3>
          <div className="contact-info">
            <span className="contact-name">{contactName} : </span>
            <a href={`tel:${contactPhone}`} className="contact-phone" onClick={handlePhoneClick}>
              {contactPhone}
            </a>
          </div>
          <div className="social-icons">
            <a
              href={socialLinks.instagram}
              className="social-icon instagram"
              onClick={(e) => {
                e.preventDefault()
                handleSocialClick("instagram", socialLinks.instagram)
              }}
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.whatsapp}
              className="social-icon whatsapp"
              onClick={(e) => {
                e.preventDefault()
                handleSocialClick("whatsapp", socialLinks.whatsapp)
              }}
            >
              <FaWhatsapp />
            </a>
            <a
              href={socialLinks.facebook}
              className="social-icon facebook"
              onClick={(e) => {
                e.preventDefault()
                handleSocialClick("facebook", socialLinks.facebook)
              }}
            >
              <FaFacebook />
            </a>
            {/* <a
              href={socialLinks.youtube}
              className="social-icon youtube"
              onClick={(e) => {
                e.preventDefault()
                handleSocialClick("youtube", socialLinks.youtube)
              }}
            >
              <FaYoutube />
            </a>
            <a
              href={socialLinks.twitter}
              className="social-icon twitter"
              onClick={(e) => {
                e.preventDefault()
                handleSocialClick("twitter", socialLinks.twitter)
              }}
            >
              <FaTwitter />
            </a> */}
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="footer-section links-section">
          <div className="links-column">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="links-column">
            <h3 className="section-title">More Info</h3>
            <ul className="footer-links">
              {moreInfoLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <span>© {companyName}. A project by </span>
            <a href={projectByLink} className="project-link">
              {projectBy}
            </a>
          </div>
          {/* <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
            <span className="whatsapp-icon">
              <FaWhatsapp />
            </span>
            {whatsappOrderText}
          </button> */}

          <WhatsAppButton />
        </div>
      </div>
    </footer>
  )
}

export default Footer
