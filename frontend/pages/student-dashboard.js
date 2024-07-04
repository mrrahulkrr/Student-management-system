import React from 'react';
import { useRouter } from 'next/router';
import "../app/globals.css"

const StudentDashboard = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Implement logout functionality here
        router.push('/'); // Redirect to login or home page after logout
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full bg-white shadow-md rounded-lg p-8 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-6">Student Dashboard</h1>
                    <div className="text-2xl font-semibold mb-4">Welcome, Student!</div>
                    <p className="mb-4">Here you can view your courses, assignments, and grades.</p>
                    <div className="flex space-x-4 mb-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                            View Courses
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                            View Assignments
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                            View Grades
                        </button>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
