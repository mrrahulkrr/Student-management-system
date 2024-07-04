import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container m-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <p className="text-lg">&copy; 2024 Your Company. All rights reserved.</p>
                    <ul className="flex space-x-4 mt-4 lg:mt-0">
                        <li><a href="#" className="text-white hover:text-gray-300"><FaFacebook size={24} /></a></li>
                        <li><a href="#" className="text-white hover:text-gray-300"><FaTwitter size={24} /></a></li>
                        <li><a href="#" className="text-white hover:text-gray-300"><FaInstagram size={24} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
