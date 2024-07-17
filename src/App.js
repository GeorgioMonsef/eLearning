import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Greeting from './Greeting';
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
    const [showGreeting, setShowGreeting] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith('/Math') || location.pathname.startsWith('/French')) {
            setShowGreeting(false);
        } else {
            setShowGreeting(true);
        }
    }, [location]);

    return (
        <>
            {showGreeting && <Greeting />}
            <Routes>
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
        </>
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

function Signup({ onSignup }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-0 bg-blue-500 transition-opacity duration-700 ease-in-out">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                        <input type="text" id="username" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">OK</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
