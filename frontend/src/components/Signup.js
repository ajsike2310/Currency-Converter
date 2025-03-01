import React, { useState } from 'react';

const SignUp = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleProfilePhotoChange = (e) => {
        setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10  w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen overflow-hidden">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-screen-lg ">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">Sign Up</h2>
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                           
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePhotoChange}
                                className="absolute inset-0 opacity-0 cursor-pointer "
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="salutation" className="block text-gray-700">Salutation</label>
                            <select
                                id="salutation"
                                className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Mrs.</option>
                                <option>Dr.</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="middleName" className="block text-gray-700">Middle Name (Optional)</label>
                            <input
                                type="text"
                                id="middleName"
                                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-gray-700">Age</label>
                            <input
                                type="number"
                                id="age"
                                min="0"
                                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
