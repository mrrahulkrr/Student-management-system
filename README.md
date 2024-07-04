# Student Management System

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)

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

# Student Management System

## Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/student-management.git
    cd student-management
    ```

2. **Install dependencies for the backend**
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Create and configure environment variables**
    - Create a `.env` file in the `backend` directory with the following content:
      ```plaintext
      MONGO_URI=your_mongodb_connection_string
      PORT=5000
      ```

5. **Start the backend server**
    ```bash
    cd backend
    npm start
    ```

6. **Start the frontend development server**
    ```bash
    cd ../frontend
    npm run dev
    ```
