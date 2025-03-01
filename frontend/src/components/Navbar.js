import logo from './pngtree.png'
import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className='bg-gray-100 flex justify-center items-center py-1'>
            <div className='flex justify-between items-center w-full max-w-screen-xl px-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="image" className='h-12 bg-slate-100 overflow-hidden'/>
                </div>
                <ul className='flex space-x-8'>
                    <li><Link to="/" className='text-gray-700'>Home</Link></li>
                    <li><Link to="/history" className='text-gray-700'>History</Link></li>
                    <li><Link to="/set-alert" className='text-gray-700'>Set Alert</Link></li>
                    <li><Link to="/profile" className='text-gray-700'>Profile</Link></li>
                </ul>
                <div className='flex space-x-4'>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="h-5" />
                <button  className='bg-blue-500 px-4 rounded'><Link to="/login">Login</Link></button>
                <button className='bg-green-500 px-4 rounded'><Link to="/signup">Sign up</Link></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


