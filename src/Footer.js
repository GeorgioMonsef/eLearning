import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="mission">Levant Solution Group's mission is to provide exceptional educational and corporate services for all people anywhere in the world while delivering world class support</p>
                <p className="copyright">&copy; 2024 Levant Solutions Group. All rights reserved.</p>
                <div><p className="hours">Sunday - Monday 24 hours, 7 days a week guaranteed.</p></div>
                <div className="footer-links">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

