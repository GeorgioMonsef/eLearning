import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
    const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleSubjectDropdown = () => {
        setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleMouseEnterSubject = () => {
        setIsSubjectDropdownOpen(true);
    };

    const handleMouseLeaveSubject = () => {
        setIsSubjectDropdownOpen(false);
    };

    const handleMouseEnterProfile = () => {
        setIsProfileDropdownOpen(true);
    };

    const handleMouseLeaveProfile = () => {
        setIsProfileDropdownOpen(false);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
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
                    <h1 className="text-2xl font-semibold ml-4">ScholarBee</h1>
                    {isSubjectDropdownOpen && (
                        <div
                            className="absolute left-0 top-10 mt-2 w-96 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                            onMouseEnter={handleMouseEnterSubject}
                            onMouseLeave={handleMouseLeaveSubject}
                        >
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-gray-900 flex items-center justify-center"
                                    >
                                        Math
                                    </a>
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <Link
                                            key={index + 1}
                                            to={`/Math${index + 1}`} // Link to respective Math page
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-left"
                                            style={{ maxWidth: '100%' }}
                                        >
                                            Grade {index + 1}
                                        </Link>
                                    ))}
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-gray-900 flex items-center justify-center"
                                    >
                                        French
                                    </a>
                                    <Link
                                        to="/French1" // Link to French1 page
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-left"
                                    >
                                        Option 1
                                    </Link>
                                    <Link
                                        to="/French2" // Link to French2 page
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-left"
                                    >
                                        Option 2
                                    </Link>
                                    <Link
                                        to="/French3" // Link to French3 page
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-left"
                                    >
                                        Option 3
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
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
                            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                            onMouseEnter={handleMouseEnterProfile}
                            onMouseLeave={handleMouseLeaveProfile}
                        >
                            <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                onClick={() => {
                                    // Implement logic for My Profile
                                    setIsProfileDropdownOpen(false); // Close dropdown on click
                                }}
                            >
                                My Profile
                            </button>
                            <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                onClick={() => {
                                    // Implement logic for My Account
                                    setIsProfileDropdownOpen(false); // Close dropdown on click
                                }}
                            >
                                My Account
                            </button>
                            <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                onClick={() => {
                                    // Implement logic for Sign Out
                                    setIsProfileDropdownOpen(false); // Close dropdown on click
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
