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
GET /api/test/protected

Headers
Authorization: Bearer <JWT_TOKEN>

API Testing
APIs tested using Postman

