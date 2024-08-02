import React, { useState } from 'react';
import './Greeting.css';

function Greeting() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLearnMore, setShowLearnMore] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleGetStartedClick = () => {
        setLoading(true); // Show loading spinner
        setTimeout(() => { // Simulate loading
            setLoading(false);
            setShowSignup(true);
            setShowLearnMore(false);
        }, 1000);
    };

    const handleLearnMoreClick = () => {
        setLoading(true); // Show loading spinner
        setTimeout(() => { // Simulate loading
            setLoading(false);
            setShowLearnMore(true);
            setShowSignup(false);
        }, 1000);
    };

    const handleSignup = () => {
        setShowSignup(false); // Hide signup
    };

    return (
        <div className="relative isolate overflow-hidden bg-blue-500">
            {/* SVG Background */}
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-red-100/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true">
                {/* SVG Content */}
            </svg>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 transition"
                 aria-live="polite">
                {/* Existing content above */}

                <div className="relative isolate overflow-hidden bg-blue-500">
                    <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#216918] to-[#30303102] opacity-20"
                         style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}></div>
                </div>

                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                            <span
                                className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                {/* SVG Icon */}
                            </span>
                        </a>
                    </div>
                    <h1 className="mt-0 text-4xl font-bold tracking-tight text-white sm:text-6xl">The answer to any
                        question, anonymously</h1>
                    <h1 className="relative w-max font-mono before:absolute before:inset-0 before:bg-blue-500 text-2xl before:animate-typewriter slide-in-left">
                        Here we believe education continues
                        <br/>
                        <span className="text-highlight">past class hours, Ask anything, get an answer </span>
                        <br/>
                        <span className="text-highlight">within one single hour. Or money back guaranteed.</span>
                    </h1>

                    {/* Button section moved here */}
                    <div className="mt-10 flex items-center gap-x-6">
                        <button onClick={handleLearnMoreClick}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-600">Learn
                            more
                        </button>
                    </div>

                    <div className="mx-auto max-w-7xl flex-shrink-0 lg:mx-0 lg:max-w-none lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16 lg:flex lg:items-start lg:gap-10">
                            <div className="lg:max-w-2xl">
                                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                                <p className="text-lg text-gray-200">
                                    Our mission is to provide 24/7 support to all students! We understand the stress of
                                    cramming last-minute and not having access to a tutor late at night.
                                </p>
                                <p className="text-lg text-gray-200 mt-4">
                                    We started this platform to ensure that every student has access to the help they
                                    need, no matter the time of day. Education shouldn't be limited by a schedule; it should be
                                    available whenever you need it.
                                </p>
                                <p className="text-lg text-gray-200 mt-4">
                                    Our service is useful because it fits into your busy schedule, providing immediate
                                    support. Get answers within an hour or your money back—guaranteed.
                                </p>
                                <p className="text-lg text-gray-200 mt-4">
                                    <a href="https://levant-solutions.com" className="text-teal-300 hover:underline">
                                        Learn more about our parent company, Levant Solutions Inc.
                                    </a>
                                </p>
                            </div>
                            <div className="flex-grow">
                                {/* Additional content (e.g., images, other sections) can go here */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="bg-white rounded-lg p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-800">Ask any question, response by the hour!</h2>
                            <textarea
                                className="mt-4 block w-full max-w-xl h-64 px-4 py-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-4 border-t-4 border-white border-opacity-50 rounded-full animate-spin"></div>
                </div>
            )}

            {showSignup && <Signup onSignup={handleSignup}/>}

            {showLearnMore && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-0 bg-blue-500 transition-opacity duration-700 ease-in-out">
                    <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg animate-fade-in">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Learn More</h2>
                        <p className="text-lg text-gray-700">
                            Here is some placeholder text to provide more information about our services and features.
                            We aim to enhance your learning experience through a variety of educational tools and
                            resources tailored just for you.
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => setShowLearnMore(false)}
                                    className="px-6 py-3 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Signup({onSignup}) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onSignup(); // Hide signup form
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-blue-500 transition-opacity duration-700 ease-in-out">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Sign
                            Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Greeting;
