import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import "../app/globals.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Admin'
    });

    const { name, email, password } = formData;
    const router = useRouter();

    const onChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}AdminReg`, formData);
            console.log(res.data);
            // Redirect to admin dashboard after successful registration
            router.push('/admin/dashboard');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
            <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto text-center">
                <span className="text-2xl font-light">Register as Admin</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-blue-400 rounded-t-md"></div>
                    <form onSubmit={onSubmit} className="px-8 py-6">
                        <label className="block font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name"
                            required
                            className="border w-full h-10 px-3 mt-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label className="block font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            required
                            className="border w-full h-10 px-3 mt-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label className="block font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter your password"
                            required
                            className="border w-full h-10 px-3 mt-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <div className="flex justify-between items-center mt-6">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
