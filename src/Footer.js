import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Levant Solutions Group. All rights reserved.</p>
                <div> {}
                    <p>Sunday - Monday, 24/7</p>
                </div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
