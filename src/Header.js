// src/components/Toolbar.js
import React, { useState } from 'react';
import './Header.css';

const Toolbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="toolbar">
            <button
                className="header-button header-button-drop"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
            >
                Dropdown
                {showDropdown && (
                    <div className="dropdown-content">
                        <button className="dropdown-option">Math</button>
                        <button className="dropdown-option">French</button>
                    </div>
                )}
            </button>
            <button className="header-button header-button-logo">Logo</button>
            <button className="header-button header-button-profile">My profile</button>
        </div>
    );
};

export default Toolbar;
