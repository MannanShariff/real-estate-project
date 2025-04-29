import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Import the CSS file
import { FaHome, FaSearch, FaHandshake, FaChartLine, FaBuilding } from 'react-icons/fa';

const LandingPage = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="landing-container">
                {/* Header */}
                <nav className="navbar">
                    <div className="logo">
                        <FaBuilding className="logo-icon" />
                        <span className="logo-text">EstateHub</span>
                    </div>
                    <div className="nav-buttons">
                        <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
                        <button className="nav-btn signup" onClick={() => navigate("/signup")}>Sign Up</button>
                    </div>
                </nav>

                {/* Main Section */}
                <div className="main-content">
                    <h1 className="get-started">Find Your Perfect Property Investment Today</h1>

                    {/* Card Section */}
                    <div className="cards-container">
                        <div className="card">
                            <FaHome className="card-icon" />
                            <h3>Browse Properties</h3>
                            <p>Explore thousands of properties that match your preferences</p>
                        </div>
                        <div className="card">
                            <FaSearch className="card-icon" />
                            <h3>Smart Search</h3>
                            <p>Find exactly what you're looking for with our advanced filters</p>
                        </div>
                        <div className="card">
                            <FaHandshake className="card-icon" />
                            <h3>Expert Agents</h3>
                            <p>Connect with professional agents to guide your journey</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
