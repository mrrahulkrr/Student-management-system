import { useState } from 'react';
import axios from 'axios';

const AddTeacherModal = ({ onClose, onTeacherAdded }) => {
    const [teacherData, setTeacherData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Teacher', // Default role
    });

    const handleChange = (e) => {
        setTeacherData({
            ...teacherData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}TeacherReg`, teacherData);
            onTeacherAdded(response.data);
            alert("Teacher is successfully added/registered");
            onClose();
        } catch (error) {
            console.error('Error adding teacher:', error);

        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add Teacher</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={teacherData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={teacherData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={teacherData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 bg-gray-500 hover:bg-gray-600 rounded text-white"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-white"
                        >
                            Add Teacher
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeacherModal;
