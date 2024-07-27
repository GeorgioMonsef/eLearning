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
                <defs>
                    <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1"
                             patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
                    <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                          strokeWidth="0"/>
                </svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
            </svg>

            {/* Main Content */}
            <div
                className={`mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 transition ${showSignup || showLearnMore ? 'blur-sm' : ''}`}
                aria-live="polite">
                <div
                    className="relative isolate overflow-hidden bg-blue-500">
                    <div
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#216918] to-[#30303102] opacity-20"
                        style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}></div>
                </div>

                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                            <span
                                className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                          clipRule="evenodd"/>
                                </svg>
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

                    <div className="mt-10 flex items-center gap-x-6">
                        <button onClick={handleGetStartedClick}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-600">Get
                            started
                        </button>
                        <button onClick={handleLearnMoreClick}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-600">Learn
                            more
                        </button>
                    </div>
                </div>
                <div
                    className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="bg-white rounded-lg p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-800">Ask any question, response by the
                                hour!</h2>
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
                    <div
                        className="w-16 h-16 border-4 border-t-4 border-white border-opacity-50 rounded-full animate-spin"></div>
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

            <div className="ml-80 max-w-2xl flex-shrink-0 lg:max-w-xl lg:pt-8">
                <div className="flex gap-8 flex-wrap justify-center bg-blue-500 py-10">
                    <div className="text-white text-2xl font-semibold leading-relaxed slide-in-left">
                        - Our mission is to provide 24/7 support to all students! We understand the stress of cramming
                        last-minute and not having access to a tutor late at night.
                    </div>
                    <div className="text-white text-2xl font-semibold leading-relaxed slide-in-left">
                        - Get an answer back within one hour or your money back, guaranteed.
                    </div>
                    <div className="text-white text-2xl font-semibold leading-relaxed slide-in-left">
                        - Our services are designed to fit your busy schedule and provide immediate support.
                    </div>
                </div>


            </div>
        </div>
    );
}

function Signup({onSignup}) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onSignup(); // Call the provided handler to show the profile
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-0 bg-blue-500 transition-opacity duration-700 ease-in-out">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <input type="text" id="name"
                               className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    {/* Add more fields as necessary */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input type="email" id="email"
                               className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit"
                                className="px-6 py-3 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Greeting;
