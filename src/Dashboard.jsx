import React, { useState } from 'react';
import './Dashboard.css';

// Import icons from react-icons
import { FaHome, FaMapMarkerAlt, FaRupeeSign, FaChartLine, FaRegBuilding } from 'react-icons/fa';
import { BiBed, BiBath } from 'react-icons/bi';
import { MdTrendingUp, MdCompare } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';

const Dashboard = () => {
    // State for form inputs
    const [area, setArea] = useState('');
    const [bhk, setBhk] = useState(2);
    const [bath, setBath] = useState(2);
    const [location, setLocation] = useState('');
    const [predictedPrice, setPredictedPrice] = useState(null);

    // Popular locations in Bangalore
    const popularLocations = [
        'Whitefield', 'Electronic City', 'Indiranagar',
        'Koramangala', 'HSR Layout', 'JP Nagar',
        'Marathahalli', 'Jayanagar', 'Bannerghatta Road'
    ];

    // Handle prediction
    const handlePrediction = (e) => {
        e.preventDefault();

        // This would be replaced with an actual API call to a ML model
        // For now, using a simple formula based on inputs
        const basePrice = 5000; // Base price per sqft

        // Location factors (in a real app, these would come from historical data)
        const locationFactors = {
            'Whitefield': 1.2,
            'Electronic City': 1.1,
            'Indiranagar': 1.8,
            'Koramangala': 1.7,
            'HSR Layout': 1.6,
            'JP Nagar': 1.4,
            'Marathahalli': 1.3,
            'Jayanagar': 1.5,
            'Bannerghatta Road': 1.3,
        };

        // Calculate price (simple formula for demo purposes)
        const locationFactor = locationFactors[location] || 1;
        const price = basePrice * parseFloat(area) * locationFactor * (0.9 + (bhk * 0.15)) * (0.95 + (bath * 0.1));

        setPredictedPrice(Math.round(price * 100) / 100);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="logo">
                    <FaHome className="logo-icon" />
                    <h1>EstateHub</h1>
                </div>
                <button className="logout-btn">logout</button>
            </div>

            <div className="dashboard-content">
                <div className="input-section">
                    <h2><FaRegBuilding /> Details</h2>

                    <div className="form-group">
                        <label htmlFor="area">AREA (sqft)</label>
                        <input
                            type="number"
                            id="area"
                            placeholder="Enter area in square feet"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bhk">BHK</label>
                        <div className="counter-input">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div
                                    key={num}
                                    className={`counter-option ${bhk === num ? 'selected' : ''}`}
                                    onClick={() => setBhk(num)}
                                >
                                    <BiBed className="input-icon" />
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bath">BATH</label>
                        <div className="counter-input">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div
                                    key={num}
                                    className={`counter-option ${bath === num ? 'selected' : ''}`}
                                    onClick={() => setBath(num)}
                                >
                                    <BiBath className="input-icon" />
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">LOCATION</label>
                        <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select a location</option>
                            {popularLocations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="predict-btn"
                        onClick={handlePrediction}
                        disabled={!area || !location}
                    >
                        <FaRupeeSign /> PREDICT PRICE
                    </button>

                    {predictedPrice && (
                        <div className="prediction-result">
                            <h3>Estimated Price:</h3>
                            <p><FaRupeeSign /> {predictedPrice.toLocaleString('en-IN')}</p>
                            <small>Based on current market trends in {location}</small>
                        </div>
                    )}
                </div>

                <div className="features-section">
                    <h2>Additional Features</h2>

                    <div className="feature-card">
                        <MdTrendingUp className="feature-icon" />
                        <div className="feature-content">
                            <h3>Price Trends</h3>
                            <p>View historical price trends for your selected area</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <MdCompare className="feature-icon" />
                        <div className="feature-content">
                            <h3>Compare Localities</h3>
                            <p>Compare prices across different localities in Bangalore</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <FaChartLine className="feature-icon" />
                        <div className="feature-content">
                            <h3>Investment Calculator</h3>
                            <p>Calculate ROI for your property investment</p>
                        </div>
                    </div>

                    <div className="feature-card">
                        <TbReportAnalytics className="feature-icon" />
                        <div className="feature-content">
                            <h3>Market Reports</h3>
                            <p>Access detailed reports about Bangalore's real estate market</p>
                        </div>
                    </div>

                    <div className="feature-card premium">
                        <FaMapMarkerAlt className="feature-icon" />
                        <div className="feature-content">
                            <h3>Neighborhood Analysis</h3>
                            <p>Get insights about amenities, safety, and connectivity</p>
                            <span className="premium-badge">Premium</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;