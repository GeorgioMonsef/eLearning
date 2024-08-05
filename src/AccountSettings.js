import React from 'react';
import Header from './Header';

function AccountSettings() {
    return (
        <div className="relative bg-blue-500 min-h-screen">
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Account Settings</h1>

                {/* Personal Information Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Username</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your username" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Date of Birth</label>
                            <input type="date" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Change Password Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Current Password</label>
                            <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter current password" />
                        </div>
                        <div>
                            <label className="block text-gray-700">New Password</label>
                            <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter new password" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Confirm New Password</label>
                            <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Confirm new password" />
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Update Password</button>
                    </div>
                </div>

                {/* Account Preferences Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Preferences</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Language</label>
                            <select className="mt-1 p-2 w-full border rounded-md">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                {/* Add more language options as needed */}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Time Zone</label>
                            <select className="mt-1 p-2 w-full border rounded-md">
                                <option>GMT-5:00 (Eastern Time)</option>
                                <option>GMT-8:00 (Pacific Time)</option>
                                <option>GMT+0:00 (Greenwich Mean Time)</option>
                                {/* Add more time zones as needed */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
