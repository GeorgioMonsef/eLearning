import React from 'react';
import './SideBar.css'; // Ensure this matches the actual file name

const SideBar = () => {
    return (
        <div className="side-bar">
            <button className="side-button">🏠 Home</button>
            <div className="courses">
                <button className="side-button courses-button">
                    📚 Courses
                </button>
                <div className="mega-menu">
                    <div className="mega-menu-column">
                        <div className="subject-group">
                            <h3>Math</h3>
                            <ul>
                                <li><a href="#">Grade 1</a></li>
                                <li><a href="#">Grade 2</a></li>
                                <li><a href="#">Grade 3</a></li>
                                <li><a href="#">Grade 4</a></li>
                                <li><a href="#">Grade 5</a></li>
                                <li><a href="#">Grade 6</a></li>
                                <li><a href="#">Grade 7</a></li>
                                <li><a href="#">Grade 8</a></li>
                                <li><a href="#">Grade 9</a></li>
                                <li><a href="#">Grade 10</a></li>
                                <li><a href="#">Grade 11</a></li>
                                <li><a href="#">Grade 12</a></li>
                            </ul>
                        </div>
                        <div className="subject-group">
                            <h3>Science</h3>
                            <ul>
                                <li><a href="#">Biology</a></li>
                                <li><a href="#">Chemistry</a></li>
                                <li><a href="#">Physics</a></li>
                            </ul>
                        </div>
                        <div className="subject-group">
                            <h3>Languages</h3>
                            <ul>
                                <li><a href="#">English</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">Spanish</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className="side-button">📝 About</button>
            <button className="side-button">📞 Contact</button>
        </div>
    );
};

export default SideBar;
