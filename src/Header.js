import React, { useState } from 'react';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <div className="flex items-center relative">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={toggleDropdown}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
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
                    {isDropdownOpen && (
                        <div
                            className="absolute left-0 top-10 mt-2 w-96 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
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
                                        <button
                                            key={index + 1}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 py-1.5 px-3 rounded-md text-sm focus:outline-none block w-full text-left"
                                            style={{ maxWidth: '100%' }}
                                        >
                                            Grade {index + 1}
                                        </button>
                                    ))}
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-gray-900 flex items-center justify-center"
                                    >
                                        French
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 block"
                                    >
                                        Option 1
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 block"
                                    >
                                        Option 2
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 block"
                                    >
                                        Option 3
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
