### Travlr Getaways Admin - Module 7 Branch

This repository contains the Travlr Getaways Admin application, now updated with secure login authentication and admin-only CRUD functionality. The work in this branch reflects the requirements of CS 465 Module Seven Assignment.

* * * * *

### Table of Contents

1.  Project Overview
2.  Features
3.  Technologies Used
4.  Setup Instructions
5.  Screenshots
6.  API Testing

* * * * *

### 1\. Project Overview

The **Travlr Getaways Admin** is a full stack web application that provides an admin interface for managing trips. This module adds a security layer with login authentication, protecting admin endpoints and ensuring secure access to CRUD functionality.

**Key updates in this module:**

-   Secure login form with JWT-based authentication.
-   Protected admin-only features such as adding and editing trips.
-   Refactored frontend and backend to incorporate the security protocol.

* * * * *

### 2\. Features

#### Frontend:

-   **Admin Login Form**:
    -   Includes email and password fields for authentication.
-   **Conditional Rendering**:
    -   Admin-only features (e.g., Edit and Add Trip buttons) appear only after logging in.
-   **CRUD Operations**:
    -   Add Trip: Accessible after login.
    -   Edit Trip: Available for logged-in users.
    -   Logout functionality.

#### Backend:

-   **JWT-based Authentication**:
    -   Protects endpoints with token validation middleware.
-   **Secured API Endpoints**:
    -   Authentication ensures access to routes like `/api/trips` and `/api/login`.
-   **New Login Endpoint**:
    -   Handles user authentication and token generation.

* * * * *

### 3\. Technologies Used

#### Frontend:

-   Angular
-   Angular Router
-   Angular Forms
-   Bootstrap for styling

#### Backend:

-   Node.js
-   Express.js
-   Mongoose (MongoDB ODM)
-   JSON Web Token (JWT)

#### Testing Tools:

-   Postman for API testing
-   MongoDB as the database

* * * * *

### 4\. Setup Instructions

1.  **Prerequisites**:

    -   Install [Node.js](https://nodejs.org/) and `npm`.
    -   Install [MongoDB](https://www.mongodb.com/) and ensure it is running.
2.  **Install dependencies**: Navigate to the root directory of the project and install the backend dependencies:
    `npm install`

3.  **Set up environment variables**: Create a `.env` file in the root of the project and add the following:
    `MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-secret-key>
    PORT=3000`

4.  **Start the server**: Run the following command in the root directory to start the backend server:
    `npm start`

5.  **Install frontend dependencies**: Navigate to the `app_admin` directory and install the Angular dependencies:
    `cd app_admin
    npm install`

6.  **Start the Angular frontend**: Launch the frontend development server:
    `ng serve`

7.  **Access the application**:

    -   Open the frontend in your browser at: `http://localhost:4200`
    -   Access the backend API at: `http://localhost:3000`

* * * * *

### 5\. Screenshots

-   **Main Dashboard**\
![Main Page](https://github.com/user-attachments/assets/c8710d18-5c8d-46e0-875d-fe3d9f0d6e19)

-   **Login Page**\
![Login Page](https://github.com/user-attachments/assets/19c42805-94ea-4afa-81b1-6015b81b9246)


-   **Successful Login**\
![Succesful Login Page](https://github.com/user-attachments/assets/445bfd6e-1d38-45e4-a6a0-24542a28c202)


* * * * *

### 6\. API Testing

#### Endpoints:

1.  `POST /api/login`:

    -   **Description**: Authenticate admin users and retrieve a JWT.
    -   **Sample Payload**:
        `{
          "email": "testuser@example.com",
          "password": "password123"
        }`

2.  `GET /api/trips`:

    -   **Description**: Retrieve all trips.
    -   **Authentication**: Requires JWT in the `Authorization` header.
3.  `POST /api/trips`:

    -   **Description**: Add a new trip.
    -   **Authentication**: Requires JWT in the `Authorization` header.
    -   **Sample Payload**:
        `{
          "name": "New Trip",
          "resort": "Example Resort",
          "length": "5 days",
          "perPerson": 1200.00,
          "description": "An exciting adventure.",
          "image": "trip-image.jpg"
        }`

4.  `PUT /api/trips/:id`:
    -   **Description**: Update a trip by ID.
    -   **Authentication**: Requires JWT in the `Authorization` header.
   
5.  `DELETE /api/trips/:id`:

    -   **Description**: Delete a trip by ID.
    -   **Authentication**: Requires JWT in the `Authorization` header.

#### Testing Instructions:

-   Open Postman or your preferred API testing tool.
-   Test the `POST /api/login` endpoint with the following credentials:
    -   **Email**: `testuser@example.com`
    -   **Password**: `password123`
-   Use the returned JWT to authenticate requests to protected endpoints. Add the token to the `Authorization` header:
    `Authorization: Bearer <JWT>`
