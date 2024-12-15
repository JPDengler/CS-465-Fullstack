# Travlr Getaways 


<div align="center">
  <img src="https://github.com/user-attachments/assets/a4bf15f0-18f5-4a23-9fdc-de7e9f93619a" alt="GetawayGif">
</div>

#

Travlr Getaways is a full-stack web application built to provide a seamless travel booking experience for customers and an administrative interface for managing trips, customers, and bookings. This project demonstrates the use of the **MEAN stack** (MongoDB, Express, Angular, and Node.js) to deliver a feature-rich, secure application.

* * * * *

Table of Contents
-----------------

1.  [Project Overview](#project-overview)
2.  [Features](#features)
3.  [Technologies Used](#technologies-used)
4.  [Setup Instructions](#setup-instructions)
5.  [Screenshots](#screenshots)
6.  [API Documentation](#api-documentation)
7.  [Testing](#testing)
8.  [Acknowledgments](#acknowledgments)

* * * * *

Project Overview
----------------

This application includes two main components:

-   **Customer-Facing Website**: A responsive, user-friendly interface for customers to explore and book travel packages.
-   **Admin Interface**: A secure single-page application (SPA) allowing administrators to manage travel packages, users, and pricing.

Key functionalities include:

-   CRUD operations for travel packages.
-   Secure login with JSON Web Tokens (JWT).
-   Integration of a RESTful API with a NoSQL database.
-   Seamless communication between the front end and back end for dynamic data rendering.

* * * * *

Features
--------

### Customer-Facing Website

-   Explore and search travel packages by location, price, and duration.
-   View detailed itineraries for booked trips.
-   User account creation and login functionality.

### Admin Interface (SPA)

-   **Authentication**: Secure login for administrators.
-   **CRUD Operations**:
    -   Add, update, and delete trips.
    -   View and manage customer accounts.
-   Conditional rendering of features based on admin login status.

* * * * *

Technologies Used
-----------------

### Frontend

-   **Angular** (SPA development)
-   **Bootstrap** (Styling and responsive design)
-   **Angular Router** (Routing between components)

### Backend

-   **Node.js** (Server-side environment)
-   **Express.js** (Web framework)
-   **Mongoose** (MongoDB ODM)
-   **JSON Web Tokens (JWT)** (Authentication)

### Database

-   **MongoDB** (NoSQL database)

### Testing Tools

-   **Postman** (API testing)
-   **Angular CLI** (Frontend testing and development)

* * * * *

Setup Instructions
------------------

### Prerequisites

1.  Install **Node.js** and **npm**.
2.  Install **MongoDB** and ensure it is running locally or accessible via a connection string.

### Steps

#### 1\. Clone the Repository
`git clone <repository-url>
cd travlr`

#### 2\. Install Dependencies

##### Backend
`npm install`

##### Frontend
`cd app_admin
npm install`

#### 3\. Set Up Environment Variables

Create a `.env` file in the root of the project:
`MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=3000`

#### 4\. Seed the Database (Optional)

Run the following script to seed initial data into the MongoDB database:

`node seed.js`

#### 5\. Start the Server

`npm start`

#### 6\. Start the Angular Frontend


`cd app_admin
ng serve`

#### 7\. Access the Application

-   **Frontend**: <http://localhost:4200>
-   **Backend API**: <http://localhost:3000>

* * * * *

Screenshots
-----------

### Customer-Facing Website
1.  **Home Page**
![Home Page](https://github.com/user-attachments/assets/886dfeec-e90b-4acd-a994-5e0752ad7ae3)

2.  **Trip Details**
![Trips](https://github.com/user-attachments/assets/6fe20f81-429c-4b03-bb5f-ad5251604851)

### Admin Interface
1.  **Login Page**
![Login Page](https://github.com/user-attachments/assets/04b69dd7-acb8-4899-97ea-12553fd10e57)

2.  **Admin Dashboard**
![Succesful Login Page](https://github.com/user-attachments/assets/a3677f04-e6d1-42a4-adfa-2c6c75759be5)

### NPM Console; Successful GETS
![Screenshot 2024-12-15 130312](https://github.com/user-attachments/assets/b919ac35-874c-42a2-ad4f-76d0138b0abc)

* * * * *

API Documentation
-----------------

### Endpoints

#### User Authentication

-   **POST /api/login**: Authenticate admin users and retrieve a JWT.

#### Trips

-   **GET /api/trips**: Retrieve all trips (requires JWT).
-   **POST /api/trips**: Add a new trip (requires JWT).
-   **PUT /api/trips/:id**: Update a trip by ID (requires JWT).
-   **DELETE /api/trips/:id**: Delete a trip by ID (requires JWT).

### Testing the API

1.  Use **Postman** or a similar tool.
2.  Authenticate using:
    -   **Email**: `testuser@example.com`
    -   **Password**: `password123`
3.  Include the JWT in the `Authorization` header for protected routes:

    makefile

    Copy code

    `Authorization: Bearer <your-jwt-token>`

* * * * *

Testing
-------

### Backend

-   Test RESTful API routes using Postman:
    -   Test positive cases (e.g., valid JWT, correct data).
    -   Test negative cases (e.g., invalid JWT, missing fields).

### Frontend

-   Manually test:
    -   Admin login/logout functionality.
    -   CRUD operations for trips (Add, Update, Delete).
    -   Ensure customer-facing pages display trips dynamically from the database.

* * * * *

Acknowledgments
---------------

This project was completed as part of **CS 465: Full Stack Development** at **Southern New Hampshire University**.\
Special thanks to the instructors especially Prof. Chipman and course materials for guidance throughout the project.
