import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Greeting from './Greeting';
import GetStarted from './GetStarted';
import AboutUs from './AboutUs';
import Profile from './ProfilePage'
import AccountSettings from './AccountSettings';
import Math1 from './Math1';
import Math2 from './Math2';
import Math3 from './Math3';
import Math4 from './Math4';
import Math5 from './Math5';
import Math6 from './Math6';
import Math7 from './Math7';
import Math8 from './Math8';
import Math9 from './Math9';
import Math10 from './Math10';
import Math11 from './Math11';
import Math12 from './Math12';
import French1 from './French1';
import French2 from './French2';
import French3 from './French3';

import './App.css';

function Main() {
    return (
        <Routes>

            <Route path="/" element={<Greeting />} />
            <Route path="/GetStarted" element={<GetStarted />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Math1" element={<Math1 />} />
            <Route path="/Math2" element={<Math2 />} />
            <Route path="/Math3" element={<Math3 />} />
            <Route path="/Math4" element={<Math4 />} />
            <Route path="/Math5" element={<Math5 />} />
            <Route path="/Math6" element={<Math6 />} />
            <Route path="/Math7" element={<Math7 />} />
            <Route path="/Math8" element={<Math8 />} />
            <Route path="/Math9" element={<Math9 />} />
            <Route path="/Math10" element={<Math10 />} />
            <Route path="/Math11" element={<Math11 />} />
            <Route path="/Math12" element={<Math12 />} />
            <Route path="/French1" element={<French1 />} />
            <Route path="/French2" element={<French2 />} />
            <Route path="/French3" element={<French3 />} />
        </Routes>
    );
}

function App() {
    return (
        <Router>
            <div className="relative isolate overflow-hidden bg-blue-500">
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
