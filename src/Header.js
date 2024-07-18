import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const subjects = [
    { name: 'Math', grades: Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`) },
    { name: 'French', grades: Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`) },
    { name: 'Computer Science', grades: Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`) },
    { name: 'Physics', grades: Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`) },
    { name: 'Chemistry', grades: Array.from({ length: 12 }, (_, index) => `Grade ${index + 1}`) }
];

function Header() {
    const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleSubjectDropdown = () => {
        setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
        setSelectedSubject(null); // Reset selected subject when toggling the dropdown
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleMouseEnterSubject = () => {
        setIsSubjectDropdownOpen(true);
    };

    const handleMouseLeaveSubject = () => {
        setIsSubjectDropdownOpen(false);
        setSelectedSubject(null); // Reset selected subject when mouse leaves
    };

    const handleMouseEnterProfile = () => {
        setIsProfileDropdownOpen(true);
    };

    const handleMouseLeaveProfile = () => {
        setIsProfileDropdownOpen(false);
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-1 py-3 flex items-center justify-between">
                <div className="flex items-center relative">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={toggleSubjectDropdown}
                        onMouseEnter={handleMouseEnterSubject}
                        onMouseLeave={handleMouseLeaveSubject}
                    >
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <Link to="/" className="text-2xl font-semibold ml-4">
                        ScholarBee
                    </Link>
                    {isSubjectDropdownOpen && (
                        <div
                            className="absolute left-0 top-5 mt-2 bg-white border border-gray-200 shadow-lg rounded-md z-10 p-1 flex dropdown-animation-TopToDown"
                            onMouseEnter={handleMouseEnterSubject}
                            onMouseLeave={handleMouseLeaveSubject}
                            style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }} // Invisible border effect
                        >
                            <div className="p-4">
                                <ul className="list-none">
                                    {subjects.map((subject) => (
                                        <li key={subject.name} className="py-1">
                                            <button
                                                onClick={() => handleSubjectClick(subject)}
                                                className={`text-blue-500 hover:text-gray-900 block w-48 text-left ${selectedSubject === subject ? 'font-bold' : ''}`}
                                            >
                                                {subject.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {selectedSubject && (
                                <div className="p-4 border-l border-gray-200 dropdown-animation-LeftToRight">
                                    <ul className="list-none">
                                        {selectedSubject.grades.map((grade, index) => (
                                            <li key={grade} className="py-1">
                                                <Link
                                                    to={`/${selectedSubject.name}${index + 1}`}
                                                    className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-center"
                                                >
                                                    {grade}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <button
                            className="text-gray-600 focus:outline-none"
                            onClick={toggleProfileDropdown}
                            onMouseEnter={handleMouseEnterProfile}
                            onMouseLeave={handleMouseLeaveProfile}
                        >
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </button>
                        {isProfileDropdownOpen && (
                            <div
                                className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                                onMouseEnter={handleMouseEnterProfile}
                                onMouseLeave={handleMouseLeaveProfile}
                                style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }} // Invisible border effect
                            >
                                <button
                                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                    onClick={() => {
                                        setIsProfileDropdownOpen(false); // Close dropdown on click
                                    }}
                                >
                                    My Profile
                                </button>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                    onClick={() => {
                                        setIsProfileDropdownOpen(false); // Close dropdown on click
                                    }}
                                >
                                    My Account
                                </button>
                                <button
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                    onClick={() => {
                                        setIsProfileDropdownOpen(false); // Close dropdown on click
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/GetStarted"
                        className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
