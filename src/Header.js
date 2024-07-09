// src/components/Toolbar.js
import React, { useState } from 'react';
import './Header.css';
import logoImg from './logo.png'; // Import your PNG logo

const Toolbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="toolbar">
            <button className="header-logo-button">
                <img src={logoImg} alt="Logo" className="header-logo" />
            </button>
            <button className="header-button header-button-profile">My profile</button>
        </div>
    );
};

export default Toolbar;
