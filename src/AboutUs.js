import React, { useState } from 'react';

function AboutUs() {
    const [showIntro, setShowIntro] = useState(true);


    return (
        <div className="bg-blue-500 text-white min-h-screen flex flex-col">

            {/* Content */}
            <div className="flex-1">
                {showIntro ? (
                    <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg text-center">
                        <h1 className="text-4xl font-bold mb-6">About Us</h1>
                        <p className="text-lg text-gray-100 mb-4">
                            Welcome to Levant Solutions Inc. We are dedicated to providing world-class technology solutions
                            for educational and corporate problems internationally to all age groups.
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-100 mb-4">
                            <li>Innovative Technology Solutions</li>
                            <li>Educational and Corporate Focus</li>
                            <li>International Reach</li>
                        </ul>

                    </div>
                ) : (
                    <div className="max-w-xl mx-auto p-8">
                        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
                        <p className="text-lg text-gray-100">
                            At Levant Solutions Inc., our mission is to bring innovative and effective solutions to our clients,
                            helping them achieve their goals and succeed in their endeavors. We believe in the power of technology
                            to transform education and corporate operations, and we strive to be at the forefront of these changes.
                        </p>
                    </div>
                )}
            </div>

            {/* Taskbar */}

        </div>
    );
}

export default AboutUs;
