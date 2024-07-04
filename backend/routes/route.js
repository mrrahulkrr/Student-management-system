const router = require('express').Router();

const { adminRegister, adminLogIn, getAdminDetail} = require('../controllers/adminCon.js');

const {
    studentRegister,
    studentLogIn,
    getAllStudents,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent } = require('../controllers/studentCon.js');

const { teacherRegister, teacherLogIn, getAllTeachers,getTeachers, getTeacherDetail, deleteTeachers, deleteTeacher } = require('../controllers/teacherCon.js');

// Admin
router.post('/AdminReg', adminRegister);
router.post('/AdminLogin', adminLogIn);

router.get("/Admin/:id", getAdminDetail)


// Student

router.post('/StudentReg', studentRegister);
router.post('/StudentLogin', studentLogIn)
router.get("/getAllStudents", getAllStudents)
router.get("/Students/:id", getStudents)
router.get("/Student/:id", getStudentDetail)

router.delete("/Students/:id", deleteStudents)

router.delete("/Student/:id", deleteStudent)


// Teacher

router.post('/TeacherReg', teacherRegister);
router.post('/TeacherLogin', teacherLogIn)
router.get('/getAllTeachers', getAllTeachers)
router.get("/Teachers/:id", getTeachers)
router.get("/Teacher/:id", getTeacherDetail)

router.delete("/Teachers/:id", deleteTeachers)

router.delete("/Teacher/:id", deleteTeacher)





module.exports = router;