// Login.js

import React from 'react';

function Login() {
    return (
        <div className="relative isolate overflow-hidden bg-blue-500 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-xl w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Log In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="usernameOrEmail">Username or Email</label>
                        <input type="text" id="usernameOrEmail" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="ml-2 text-sm text-gray-700">Remember me</span>
                            </label>
                        </div>
                        <div>
                            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
