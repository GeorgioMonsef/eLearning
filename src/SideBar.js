// src/components/SideBar.js
import React from 'react';
import './SideBar.css'; // Ensure this matches the actual file name

const SideBar = () => {
    return (
        <div className="side-bar">
            <button className="side-button">Home</button>
            <button className="side-button">About</button>
            <button className="side-button">Contact</button>
        </div>
    );
};

export default SideBar;
