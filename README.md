# Project-Hub
Secure Role-Based Project Management System
Auther: Akriti Yadav MERN FULL STACK DEVELOPER

ProjectHub is a full-stack MERN application that enables teams to manage projects and tasks with secure authentication and role-based authorization.
The application follows RESTful API principles, uses JWT for authentication, and is designed with scalability and security in mind.

#Frontend
React.js
React Router
Axios
Redux 

#Backend
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Token)
bcrypt.js

Dev & Tools
MongoDB Atlas
Postman
Nodemon
Git & GitHub


Authentication & Security
User registration with encrypted passwords
User login with JWT token generation
Secure password hashing using bcrypt
JWT-based authentication
Environment-based configuration using .env

Role Management
-User roles: Admin, Manager, User|
-Role stored securely in database projectHub

API Endpoints (Auth)

Register User
POST /api/auth/register
Request Body
{
  "name": "Akriti Yadav",
  "email": "akriti@test.com",
  "password": "123456",
  "role": "admin"
}


Login User
Endpoint
POST /api/auth/login

Request Body
{
  "email": "akriti@test.com",
  "password": "123456"
}

Response
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "userId",
    "name": "Akriti Yadav",
    "email": "akriti@test.com",
    "role": "admin"
  }
}


Protected Route (Test)
End Point:
GET /api/test/protected

Headers
Authorization: Bearer <JWT_TOKEN>

Response
{
    "message": "Access granted to protected route",
    "user": {
        "_id": "694fac0670d632ba32c3b0ae",
        "name": "aktest1",
        "email": "aktest1@test.com",
        "role": "admin",
        "createdAt": "2025-12-27T09:51:02.344Z",
        "updatedAt": "2025-12-27T09:51:02.344Z",
        "__v": 0
    }
}

Added
Admin-Only Route

Endpoint
GET /api/admin/dashboard
Response 

{
  "message": "Welcome Admin"
}

Create Project
Access: Admin, Manager
ENDPOINT
POST /api/projects

Request Body
{
  "title": "Design Login Page",
  "description": "Create login UI",
  "project": "projectId",
  "assignedTo": "userId"
}

Success Response (201)
{
  "_id": "taskId",
  "title": "Design Login Page",
  "status": "todo",
  "project": "projectId",
  "assignedTo": "userId"
}

Get Tasks by Project
Access: Any authenticated user
Endpoint
GET /api/tasks/project/:projectId

Success Response (200)
[
  {
    "_id": "taskId",
    "title": "Design Login Page",
    "status": "todo"
  }
]

Update Task
Access: Admin, Manager
Endpoint
PUT /api/tasks/:id
Request Body
{
  "status": "in-progress"
}
Success Response (200)
{
  "_id": "taskId",
  "status": "in-progress"
}

Delete Task
Access: Admin only
Endpoint
DELETE /api/tasks/:id
Success Response (200)
{
  "message": "Task deleted successfully"
}











API Testing
APIs tested using Postman

