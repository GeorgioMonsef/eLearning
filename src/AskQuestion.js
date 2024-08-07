import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AskQuestion() {
    const [question, setQuestion] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Retrieve the question text from the state passed from the Greeting component
        if (location.state && location.state.questionText) {
            setQuestion(location.state.questionText);
        }
    }, [location.state]);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate a submission process
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            navigate('/PreviewQuestion', { state: { question, image } });
        }, 1000);
    };

    return (
        <div className="relative bg-blue-500 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ask a Question</h2>

                {submitted ? (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-green-600">Question Submitted Successfully!</h3>
                        <p className="mt-4 text-gray-600">Thank you for your question. Our team will respond within an hour.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                                Your Question
                            </label>
                            <textarea
                                id="question"
                                value={question}
                                onChange={handleQuestionChange}
                                className="mt-1 block w-full h-40 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Attach an Image (optional)
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none"
                            />
                            {image && (
                                <div className="mt-4">
                                    <p className="text-gray-600">{image.name}</p>
                                    <img src={URL.createObjectURL(image)} alt="Preview" className="mt-2 max-h-40 rounded-lg shadow-md"/>
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-4 border-t-4 border-white border-opacity-50 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}

export default AskQuestion;
