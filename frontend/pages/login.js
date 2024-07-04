import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import "../app/globals.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState('');

    const router = useRouter();

    const { email, password, role } = formData;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleSelect = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${role.toUpperCase()}Login`, formData);
            const data = res.data;

            // Check if login was successful
            if (data.email) {
                switch (role) {
                    case 'student':
                        router.push('/student-dashboard');
                        break;
                    case 'teacher':
                        router.push('/teacher-dashboard');
                        break;
                    case 'admin':
                        router.push('/admin/dashboard');
                        break;
                    default:
                        break;
                }
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please try again.');
        }
    };

    const renderLoginForm = () => (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-3xl mb-4 text-center font-bold">{`${role.charAt(0).toUpperCase() + role.slice(1)} Login`}</h1>
            <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder={`Enter your ${role} email`}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 w-full"
                    >
                        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                </div>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
    );

    const renderRoleButtons = () => (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-3xl mb-4 text-center font-bold">Select Role</h1>
            <div className="flex flex-col space-y-4">
                <button
                    onClick={() => handleRoleSelect('student')}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 w-full`}
                >
                    Student
                </button>
                <button
                    onClick={() => handleRoleSelect('teacher')}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 w-full`}
                >
                    Teacher
                </button>
                <button
                    onClick={() => handleRoleSelect('admin')}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 w-full`}
                >
                    Admin
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
            <div className="max-w-md w-full">{role ? renderLoginForm() : renderRoleButtons()}</div>
            <p className="mt-4 text-center text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-500 hover:underline">
                    Register as Admin
                </Link>
            </p>
        </div>
    );
};

export default Login;
