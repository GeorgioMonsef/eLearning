import React, { useState } from 'react';
import Toolbar from './Header';
import Footer from './Footer'; // Import the Footer component
import SideBar from './SideBar'; // Import the SideBar component
import './App.css'; // Import the CSS file

const App = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="App">
            <Toolbar />
            <div className="main-content">
                <SideBar />
                <div className="content">
                    <p className="huge-welcome">Welcome to Ontario's premier online learning platform!</p>
                    <p className="subtext">Your one stop for everything education</p>
                    <form className="question-form">
                        <input
                            type="text"
                            id="question"
                            name="question"
                            className="question-input"
                            placeholder="Ask a question, response guaranteed by the hour or your money back!"
                        />
                        <button type="submit" className="question-submit">Submit</button>
                    </form>
                    <p className="ourMission">Here at QnA'd, we dedicate ourselves into answering any questions privately to do with any of the following subjects:</p>
                    <div className="additional-info">
                        <div className="dropdown-group">
                            <button className={`dropdown-toggle ${activeSection === 'mathematics' ? 'active' : ''}`} onClick={() => toggleSection('mathematics')}>
                                Mathematics
                            </button>
                            {activeSection === 'mathematics' && (
                                <div className="dropdown-content">
                                    <button className="dropdown-option">Option 1</button>
                                    <button className="dropdown-option">Option 2</button>
                                    <button className="dropdown-option">Option 3</button>
                                </div>
                            )}
                        </div>
                        <div className="dropdown-group">
                            <button className={`dropdown-toggle ${activeSection === 'physics' ? 'active' : ''}`} onClick={() => toggleSection('physics')}>
                                Physics
                            </button>
                            {activeSection === 'physics' && (
                                <div className="dropdown-content">
                                    <button className="dropdown-option">Option 1</button>
                                    <button className="dropdown-option">Option 2</button>
                                    <button className="dropdown-option">Option 3</button>
                                </div>
                            )}
                        </div>
                        <div className="dropdown-group">
                            <button className={`dropdown-toggle ${activeSection === 'chemistry' ? 'active' : ''}`} onClick={() => toggleSection('chemistry')}>
                                Chemistry
                            </button>
                            {activeSection === 'chemistry' && (
                                <div className="dropdown-content">
                                    <button className="dropdown-option">Option 1</button>
                                    <button className="dropdown-option">Option 2</button>
                                    <button className="dropdown-option">Option 3</button>
                                </div>
                            )}
                        </div>
                        <div className="dropdown-group">
                            <button className={`dropdown-toggle ${activeSection === 'biology' ? 'active' : ''}`} onClick={() => toggleSection('biology')}>
                                Biology
                            </button>
                            {activeSection === 'biology' && (
                                <div className="dropdown-content">
                                    <button className="dropdown-option">Option 1</button>
                                    <button className="dropdown-option">Option 2</button>
                                    <button className="dropdown-option">Option 3</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default App;
