import React from 'react';
import Link from 'next/link';
import { FaBars, FaUser } from 'react-icons/fa'; // Example icons for mobile menu and user avatar (requires installation of react-icons)

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg ">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4 mr-2">
                    {/* Logo */}
                    <Link href="/" className="text-white text-2xl font-bold flex items-center space-x-2 mr-3">
                            {/* <img src="/logo.svg" alt="Logo" className="h-8 w-8" /> Replace with your logo */}
                            <span>Brand</span>

                    </Link>

                    {/* Mobile Menu Button (visible only on small screens) */}
                    <div className="lg:hidden">
                        <button className="text-white focus:outline-none">
                            <FaBars size={24} />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <Link href="/courses" className="text-white hover:text-gray-200">Courses
                        </Link>
                        <Link href="/assignments" className="text-white hover:text-gray-200">Assignments
                        </Link>
                        <Link href="/grades" className="text-white hover:text-gray-200">Grades
                        </Link>
                    </div>


                    <div className="hidden lg:flex items-center space-x-4">
                        <FaUser className="text-white text-xl" />
                        <span className="text-white">Rahul</span> 
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
