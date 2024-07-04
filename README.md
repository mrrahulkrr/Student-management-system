# Student Management System

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Student Management System is a web application designed to manage students and teachers in an educational institution. The admin can add, edit, and delete teachers and students, and view them in a user-friendly dashboard.

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Project Structure

```bash
student-management/
├── backend/
│   ├── controllers/
│   │   ├── studentCon.js
│   │   ├── teacherCon.js
│   ├── models/
│   │   ├── studentSchema.js
│   │   ├── teacherSchema.js
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── teacherRoutes.js
│   ├── app.js
├── frontend/
│   ├── components/
│   │   ├── AddStudentModal.js
│   │   ├── AddTeacherModal.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── StudentCard.js
│   │   ├── TeacherCard.js
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── dashboard.js
│   │   ├── student-dashboard.js
│   │   ├── teacher-dashboard.js
│   │   ├── login.js
│   │   ├── register.js
│   ├── app/
│   │   ├── globals.css
├── package.json
