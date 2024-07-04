import React from 'react';

const TeacherCard = ({ teacher, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full max-w-sm">
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-sm">Email: {teacher.email}</p>
            <p className="text-sm">Role: {teacher.role}</p>
            <div className="mt-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                    onClick={() => onEdit(teacher)}
                >
                    Edit
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    onClick={() => onDelete(teacher.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TeacherCard;
