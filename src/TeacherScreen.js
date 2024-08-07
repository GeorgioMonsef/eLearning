import React from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherScreen() {
    const navigate = useNavigate();

    const questions = [
        { id: 1, question: 'Placeholder question 1' },
        { id: 2, question: 'Placeholder question 2' },
        { id: 3, question: 'Placeholder question 3' }
    ];

    const handleAnswer = (question) => {
        navigate('/PreviewQuestion', { state: { question } });
    };

    return (
        <div className="bg-blue-500 min-h-screen flex items-center justify-center">
            <div className="space-y-6 p-4 w-full max-w-4xl">
                {questions.map((q) => (
                    <div key={q.id} className="bg-white rounded-lg p-8 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Question</h2>
                        <p className="text-gray-600 mb-8">{q.question}</p>
                        <button
                            onClick={() => handleAnswer(q.question)}
                            className="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Answer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeacherScreen;
