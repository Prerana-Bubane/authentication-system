# Authentication System
This is a simple and secure Authnetication System built using Node.js, Express.js and MongoDB.

## Features
- User Registration (Signup)
- User Login
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected Routes
- Error Handling

## Tech Stack 
-Node.js
-Express.js
-MongoDB
-Mongoose
-bcrypt
-JSON Web Token (JWT)

## Installation & Setup
1. Clone the repository
2. Navigate to project folder
3. Install dependencies:

   npm install

4. Create a `.env` file and add:

   PORT=3200
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

5. Start the server:

   npm start

Server runs on:
http://localhost:3200


##  API Endpoints

### Authentication Routes

POST /signup  
POST /login 

## How Authentication Works

- User registers with name & password
- Password is hashed using bcrypt
- On login, server verifies credentials
- Server generates JWT token
- Protected routes require valid token

## Author

Prerana Bubane