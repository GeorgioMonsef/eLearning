import React, { useState } from 'react';
import './Header.css';
import logoImg from './logo.png'; // Import your PNG logo
import { Link } from 'react-router-dom';

const Toolbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className="toolbar">
            <button className="header-logo-button">
                <img src={logoImg} alt="Logo" className="header-logo" />
            </button>
            <div
                className="header-profile-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="header-button header-button-profile">My profile</button>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <Link to="/SignUp" className="dropdown-item">Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Toolbar;