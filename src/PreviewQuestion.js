import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PreviewQuestion() {
    const location = useLocation();
    const { question, image: initialQuestionImage } = location.state || {};
    const [answer, setAnswer] = useState('');
    const [answerImage, setAnswerImage] = useState(null);
    const [answerImageURL, setAnswerImageURL] = useState(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (answerImage) {
            setAnswerImageURL(URL.createObjectURL(answerImage));
        }
        return () => {
            if (answerImageURL) {
                URL.revokeObjectURL(answerImageURL); // Clean up the object URL when the component unmounts or updates
            }
        };
    }, [answerImage, answerImageURL]);

    const handleDoneClick = () => {
        setDone(true);
    };

    const handleAnswerImageChange = (e) => {
        setAnswerImage(e.target.files[0]);
    };

    return (
        <div className="relative bg-blue-500 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Answer This Question</h2>

                {/* Question Section */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        The Question
                    </label>
                    <textarea
                        className="mt-1 block w-full h-40 p-3 border border-gray-300 rounded-md bg-gray-50"
                        value={question}
                        readOnly
                    />
                </div>

                {initialQuestionImage && (
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Attached Image (Question)
                        </label>
                        <img
                            src={URL.createObjectURL(initialQuestionImage)}
                            alt="Question Preview"
                            className="mt-2 max-h-40 rounded-lg shadow-md"
                        />
                    </div>
                )}

                {/* Answer Section */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Answer
                    </label>
                    <textarea
                        className="mt-1 block w-full h-40 p-3 border border-gray-300 rounded-md bg-gray-50"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        readOnly={done}
                    />
                </div>

                {!done && (
                    <div className="mb-6">
                        <label htmlFor="answerImage" className="block text-sm font-medium text-gray-700">
                            Attach an Image (optional)
                        </label>
                        <input
                            type="file"
                            id="answerImage"
                            accept="image/*"
                            onChange={handleAnswerImageChange}
                            className="mt-1 block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none"
                        />
                        {answerImage && (
                            <div className="mt-4">
                                <p className="text-gray-600">{answerImage.name}</p>
                                <img
                                    src={answerImageURL}
                                    alt="Answer Preview"
                                    className="mt-2 max-h-40 rounded-lg shadow-md"
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-6 flex justify-end">
                    {!done && (
                        <button
                            className="px-6 py-3 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            onClick={handleDoneClick}
                        >
                            Done
                        </button>
                    )}
                    {done && (
                        <button
                            className="px-6 py-3 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        >
                            Answer Question
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PreviewQuestion;
