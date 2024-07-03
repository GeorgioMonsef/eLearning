// src/components/App.js
import React from 'react';
import Toolbar from './Header';
import Footer from './Footer'; // Import the Footer component

const App = () => {
    return (
        <div>
            <Toolbar />
            <h1>Welcome to My App</h1>
            <p>Welcome to Ontario's premier online learning platform.</p>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default App;
