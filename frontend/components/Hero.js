import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to the Student Management System</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">Manage students effortless with our intuitive system.</p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/register"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                            Register
                        </Link>
                        <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default Hero
