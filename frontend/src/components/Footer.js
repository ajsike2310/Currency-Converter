import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 fixed-bottom">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-2">Solutions</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Marketing</a></li>
                            <li><a href="#" className="hover:underline">Analytics</a></li>
                            <li><a href="#" className="hover:underline">Automation</a></li>
                            <li><a href="#" className="hover:underline">Commerce</a></li>
                            <li><a href="#" className="hover:underline">Insights</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Jobs</a></li>
                            <li><a href="#" className="hover:underline">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Support</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Submit Ticket</a></li>
                            <li><a href="#" className="hover:underline">Documentation</a></li>
                            <li><a href="#" className="hover:underline">Guides</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">License</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="text-center">
                    <p>&copy; 2025 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
