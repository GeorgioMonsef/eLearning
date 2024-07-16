import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Profile() {
    return (
        <div className="relative bg-blue-500 min-h-screen">
            <div className="flex items-start p-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <img src={require('./elreanpfp.png')} alt="Profile" className="rounded-full h-24 w-24"/>
                </div>
                {/* Profile Information */}
                <div className="ml-6">
                <h1 className="text-4xl font-bold text-white">Welcome to Your Profile!</h1>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-white">Profile Details</h2>
                        <div className="bg-white rounded-lg p-4 shadow-md mt-2">
                            <p className="text-gray-700">Name: [Your Name]</p>
                            <p className="text-gray-700">Username: [Your Username]</p>
                            <p className="text-gray-700">Email: [Your Email]</p>
                            <p className="text-gray-700">Date of Birth: [Your DOB]</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
