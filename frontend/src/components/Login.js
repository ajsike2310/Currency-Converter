import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6" style={{ width: '550px', height: '450px' }}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-purple-800 ">Login</div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        /><br /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        /><br /><br />
                        <button className="text-yellow-500 bg-black p-2 rounded-lg w-full hover:bg-gray-800">Login</button><br /><br />
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                            <button className="text-white bg-green-500 p-2 rounded-lg hover:bg-green-600"><Link to="/signup">Sign Up</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
