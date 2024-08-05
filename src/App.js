import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CardGrid from "./CardGrid";
import Header from './Header';
import Footer from './Footer';
import Greeting from './Greeting';
import GetStarted from './GetStarted';
import AboutUs from './AboutUs';
import Profile from './ProfilePage'
import AccountSettings from './AccountSettings';
import LogIn from './LogIn';
import Payment from './Payment';
import AskQuestion from './AskQuestion'
import PreviewQuestion from './PreviewQuestion'
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
            <Route path="/Login" element={<LogIn />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/AskQuestion" element={<AskQuestion />} />
            <Route path="/PreviewQuestion" element={<PreviewQuestion />} />
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
    const [showPrompt, setShowPrompt] = useState(false);
    const [question, setQuestion] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const [otherInquiry, setOtherInquiry] = useState('');

    const handleButtonClick = () => {
        setShowPrompt(true);
    };

    const handleInputChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleInquiryChange = (event) => {
        setInquiryType(event.target.value);
    };

    const handleOtherInquiryChange = (event) => {
        setOtherInquiry(event.target.value);
    };

    const handleClose = () => {
        setShowPrompt(false);
        setInquiryType('');
        setQuestion('');
        setOtherInquiry('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert(`Inquiry Type: ${inquiryType}\nQuestion: ${question}\nAdditional Info: ${otherInquiry}`);
        setQuestion('');
        setOtherInquiry('');
        setInquiryType('');
        setShowPrompt(false);
    };

    return (
        <Router>
            <div className="relative isolate overflow-hidden bg-blue-500 min-h-screen">
                <Header />
                <Main />
                <a
                    href="#"
                    onClick={handleButtonClick}
                    className="fixed bottom-4 right-4 btn animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blue-500 px-4 py-2 rounded-lg tracking-wide text-white"
                >
                    <span className="ml-2">Ask a question</span>
                </a>
                <Footer />

                {/* Prompt */}
                {showPrompt && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                        <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl">
                            <h2 className="text-3xl font-bold mb-6">Ask a Question</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block text-lg font-medium mb-2">Nature of Inquiry</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="schoolwork"
                                                checked={inquiryType === 'schoolwork'}
                                                onChange={handleInquiryChange}
                                                className="mr-2"
                                            />
                                            Schoolwork
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="personal"
                                                checked={inquiryType === 'personal'}
                                                onChange={handleInquiryChange}
                                                className="mr-2"
                                            />
                                            Personal Inquiry
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="other"
                                                checked={inquiryType === 'other'}
                                                onChange={handleInquiryChange}
                                                className="mr-2"
                                            />
                                            Other
                                        </label>
                                    </div>
                                    {inquiryType === 'other' && (
                                        <textarea
                                            value={otherInquiry}
                                            onChange={handleOtherInquiryChange}
                                            placeholder="Please specify..."
                                            className="w-full p-4 border border-gray-300 rounded-lg mt-4 text-lg"
                                            rows="1"
                                        />
                                    )}
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        value={question}
                                        onChange={handleInputChange}
                                        placeholder="Type your question here..."
                                        className="w-full p-4 border border-gray-300 rounded-lg text-lg"
                                        rows="6"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-4 text-lg"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;