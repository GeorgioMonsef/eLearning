import React, { useState } from 'react';

function Math1() {
    const [showIntro, setShowIntro] = useState(true);

    const handleStartLesson = () => {
        setShowIntro(false);
    };

    return (
        <div className="bg-blue-500 text-white min-h-screen flex flex-col">

            {/* Content */}
            <div className="flex-1">
                {showIntro ? (
                    <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg text-center">
                        <h1 className="text-4xl font-bold mb-6">Math Lesson 1</h1>
                        <p className="text-lg text-gray-100 mb-4">
                            Welcome to Math Lesson 1. In this lesson, we will cover the basics of algebra, including solving simple equations and understanding variables.
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-100 mb-4">
                            <li>Introduction to Variables</li>
                            <li>Simple Equations</li>
                            <li>Basic Algebraic Expressions</li>
                        </ul>
                        <button
                            className="px-6 py-2 bg-white text-blue-500 rounded hover:bg-blue-600 transition duration-300"
                            onClick={handleStartLesson}
                        >
                            Start Lesson
                        </button>
                    </div>
                ) : (
                    <div className="max-w-xl mx-auto p-8">
                        <h1 className="text-4xl font-bold mb-4">Algebra</h1>
                        <p className="text-lg text-gray-100">
                            Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In this section, we will delve into the fundamental concepts of algebraic expressions, equations, and more.
                        </p>
                    </div>
                )}
            </div>

            {/* Taskbar */}

        </div>
    );
}

export default Math1;
