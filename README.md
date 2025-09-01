# Task Manager App

A full-stack task management application built with **React**, **Shadcn UI**, **TailwindCSS**, **Firebase Authentication**, **Node.js**, **Express**, and **MongoDB**. Users can sign up, log in, and manage tasks with role-based access control.

---

## Features

- **Frontend**
  - React + Shadcn UI + TailwindCSS
  - Firebase Email/Password Authentication
  - Cookie-based token storage (`js-cookie`)
  - Navigation based on authentication status
  - Task list with owner and role visibility
  - Task creation, update, and deletion
  - Toast notifications for success/error

- **Backend**
  - Node.js + Express API
  - MongoDB with Mongoose
  - Firebase Admin for token verification
  - Task CRUD endpoints with role-based access:
    - **Admin/Manager**: manage all tasks
    - **User**: manage only their own tasks
  - Middleware for authentication (`verifyAuth`) and role-based authorization (`requireRole`)

---

## Installation

### Backend

1. Clone the repository:

```bash
git clone <repo_url>
cd backend
```
2.Install dependencies:
```bash
npm install
```

3. env example is give in the code add them 
4. Start the backend:
```bash
npm run dev
```
API runs at http://localhost:5000.

5. Start the frontend:
```bash
npm run dev
```

App runs at http://localhost:5173.


