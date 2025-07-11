import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/Home.css";
import { FaChevronDown } from "react-icons/fa";


function Header() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

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
                <label htmlFor="menu-toggle" className="close-btn">✕</label>

                <Link to="/">Home</Link>

                <div className={`dropdown ${dropdownOpen ? "mobile-open" : ""}`}>
                    <button
                        className="dropbtn"
                        onClick={toggleDropdown}
                        type="button"
                    >
                        Templates <FaChevronDown style={{ marginLeft: "4px" }} />
                    </button>

                    <div className="dropdown-content">
                        <Link to="/template1">First Template</Link>
                        <Link to="/templates2">Second Template</Link>
                        <Link to="/templates3">Third Template</Link>
                    </div>
                </div>

                <Link to="/packages">Pricing</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
