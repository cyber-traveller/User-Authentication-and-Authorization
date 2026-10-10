# User Authentication & Authorization

A small Express and MongoDB service that handles user registration, login and a JWT-protected route.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

## Features

- Registration with bcrypt-hashed passwords
- Login that returns a signed JWT
- Auth middleware that protects routes and verifies the token

## Endpoints

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/users/register` | No | Create an account |
| POST | `/api/users/login` | No | Log in and receive a token |
| GET | `/api/users/user` | Bearer token | Get the current user |

## Getting started

```bash
git clone https://github.com/cyber-traveller/User-Authentication-and-Authorization.git
cd User-Authentication-and-Authorization
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<a long random string>
JWT_EXPIRES_IN=1d
```

Then start the server:

```bash
node server.js
```

## Structure

```
config/        Database connection
controllers/   Registration and login logic
middlewares/   JWT verification
models/        User schema
routes/        Auth routes
server.js      App entry point
```
