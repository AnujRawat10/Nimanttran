"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import "../pages/Home.css"
import { FaChevronDown } from "react-icons/fa"

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  // Close dropdown when clicking outside (for desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  // Close dropdown and mobile menu when clicking on dropdown links
  const handleDropdownLinkClick = () => {
    setDropdownOpen(false)
    // Only close mobile menu if it exists (mobile/tablet)
    const menuToggle = document.getElementById("menu-toggle")
    if (menuToggle) {
      menuToggle.checked = false
    }
  }

  // Close mobile menu when clicking on regular nav links
  const handleNavLinkClick = () => {
    const menuToggle = document.getElementById("menu-toggle")
    if (menuToggle) {
      menuToggle.checked = false
    }
  }

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          {/* <img src="/logo.png" alt="Logo" className="logo-img" /> */}
          <div className="logo-text">
            <div className="logo-hindi">निमंत्रण</div>
            <div className="logo-eng">WEB INVITATIONS</div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="nav">
        <label htmlFor="menu-toggle" className="close-btn">
          ✕
        </label>
        <Link to="/" onClick={handleNavLinkClick}>
          Home
        </Link>
        <div className={`dropdown ${dropdownOpen ? "mobile-open" : ""}`}>
          <button className="dropbtn" onClick={toggleDropdown} type="button">
            Templates <FaChevronDown style={{ marginLeft: "4px" }} />
          </button>
          <div className="dropdown-content">
            <Link to="/template1" onClick={handleDropdownLinkClick}>
              First Template
            </Link>
            <Link to="/template2" onClick={handleDropdownLinkClick}>
              Second Template
            </Link>
            <Link to="/template3" onClick={handleDropdownLinkClick}>
              Third Template
            </Link>
          </div>
        </div>
        <Link to="/packages" onClick={handleNavLinkClick}>
          Pricing
        </Link>
        <Link to="/about" onClick={handleNavLinkClick}>
          About
        </Link>
        <Link to="/contact" onClick={handleNavLinkClick}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
