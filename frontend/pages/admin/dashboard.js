import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar';
import TeacherCard from '../../components/TeacherCard';
import StudentCard from '../../components/StudentCard';
import AddTeacherModal from '../../components/AddTeacherModel';
import AddStudentModal from '../../components/AddStudentModel';
import "../../app/globals.css";

const Dashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
    const [showAddStudentModal, setShowAddStudentModal] = useState(false);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}getAllTeachers`);
                setTeachers(res.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        const fetchStudents = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}getAllStudents`);
                setStudents(res.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchTeachers();
        fetchStudents();
    }, []);

    const handleAddTeacher = async (teacherData) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/teachers`, teacherData);
            setTeachers([...teachers, res.data]);
        } catch (error) {
            console.error('Error adding teacher:', error);
        }
    };

    const handleAddStudent = async (studentData) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/students`, studentData);
            setStudents([...students, res.data]);
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Teachers</h2>
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                                onClick={() => setShowAddTeacherModal(true)}
                            >
                                Add Teacher
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teachers.map((teacher) => (
                                <TeacherCard key={teacher.id} teacher={teacher} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Students</h2>
                            <button 
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                                onClick={() => setShowAddStudentModal(true)}
                            >
                                Add Student
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {students.map((student) => (
                                <StudentCard key={student.id} student={student} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {showAddTeacherModal && (
                <AddTeacherModal 
                    onClose={() => setShowAddTeacherModal(false)} 
                    onTeacherAdded={handleAddTeacher}
                />
            )}
            {showAddStudentModal && (
                <AddStudentModal 
                    onClose={() => setShowAddStudentModal(false)} 
                    onStudentAdded={handleAddStudent}
                />
            )}
        </div>
    );
};

export default Dashboard;
