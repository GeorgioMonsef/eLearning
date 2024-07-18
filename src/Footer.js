import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com', '_blank');
    };

    const handleYouTubeClick = () => {
        window.open('https://www.youtube.com', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/levantsolutions/', '_blank');
    };

    const handleTwitterClick = () => {
        window.open('https://www.twitter.com', '_blank');
    };

    return (
        <footer className="relative bg-blue-500 pt-8 pb-6 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Our mission</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Levant Solutions Inc. is determined to provide world class technology solutions for
                            educational and corporate problems internationally to all age groups.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={handleFacebookClick}
                                style={{ backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/179/179319.png)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center' }}
                            >
                                {/* Placeholder icon */}
                            </button>
                            <button
                                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={handleYouTubeClick}
                                style={{ backgroundImage: 'url(https://www.svgrepo.com/show/416500/youtube-circle-logo.svg)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center' }}
                            >
                                {/* Placeholder icon */}
                            </button>
                            <button
                                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={handleInstagramClick}
                                style={{ backgroundImage: 'url(https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center' }}
                            >
                                {/* Placeholder icon */}
                            </button>
                            <button
                                className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                onClick={handleTwitterClick}
                                style={{ backgroundImage: 'url(https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center' }}
                            >
                                {/* Placeholder icon */}
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                              to="/AboutUs">About Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://creative-tim.com/terms?ref=njs-profile">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                           href="mailto:georgio.monsef@levantsolutionsinc.com">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2024</span> <a href="https://www.google.com"
                                                                                   className="text-blueGray-500 hover:text-gray-800"
                                                                                   target="_blank"
                                                                                   rel="noopener noreferrer"></a>
                            <a href="https://www.google.com"
                               className="text-blueGray-500 hover:text-blueGray-800"> Levant Solutions Inc</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
