# Express.js Cron Job - Update Authentication Tokens

## Overview
This is a simple Express.js application with a cron job that updates authentication tokens for all users stored in a MongoDB database every hour. It uses node-cron to schedule the job and UUID to generate new tokens.

![image](https://github.com/user-attachments/assets/76a4867e-0c98-476c-b44a-c18c6d1a3dc0)


![image](https://github.com/user-attachments/assets/ccbb089c-f3fa-4438-877f-726b0f843d44)

## Features
✅ Express.js API for adding users

✅ MongoDB database for storing user data

✅ Cron job that runs every hour to update authentication tokens

✅ Logs the old and new tokens in the console

## Prerequisites
Before running the project, ensure you have the following installed on your system:

Node.js (v16 or later) → Download Node.js

MongoDB (Local or Cloud) → Download MongoDB

VS Code (Optional but recommended) → Download VS Code

## Installation & Setup
- Clone the Repository
```
git clone https://github.com/pranavkulkarni2905/Express-CRON-job.git
cd express-cron-job
```
- Install Dependencies
```
npm install
```
- Configure Environment Variables
Create a .env file in the root directory and add:

```
MONGO_URI=mongodb://localhost:27017/cronJobDB
PORT=5000
```
MONGO_URI → Use local MongoDB or replace with your MongoDB Atlas URI.
PORT → Define the port where the Express server will run.

- Running the Project
1. Start MongoDB 

2. Start the Express Server
Run:
```
node server.js
```

## Testing the API
- Add a User
Use Postman or cURL to send a POST request:

Request:

```
 POST http://localhost:5000/add-user 

{"name": "John Doe", "email": "john@example.com"}

Response:

{
  "message": "User added successfully",
  "user": {
    "_id": "65a7c3f3b2a12c3a4f8e23cd",
    "name": "John Doe",
    "email": "john@example.com",
    "authToken": "550e8400-e29b-41d4-a716-446655440000"
  }
}
```
- Verify Token Updates
The cron job automatically updates authentication tokens every hour.
To test immediately, manually trigger it in server.js:
```
const updateTokens = require('./cron/updateTokens');
updateTokens();
```
Check the console logs for token updates.
