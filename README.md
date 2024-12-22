Travlr Getaways
===============

<div align="center"> <img src="https://github.com/user-attachments/assets/a4bf15f0-18f5-4a23-9fdc-de7e9f93619a" alt="GetawayGif"> </div>

* * * * *

Travlr Getaways is a full-stack web application built to provide a seamless travel booking experience for customers and an administrative interface for managing trips, customers, and bookings. This project demonstrates the use of the **MEAN stack** (MongoDB, Express, Angular, and Node.js) to deliver a feature-rich, secure application.

* * * * *

Table of Contents
-----------------

1.  [Module Eight Journal](#module-eight-journal)
3.  [Features](#features)
4.  [Technologies Used](#technologies-used)
5.  [Setup Instructions](#setup-instructions)
6.  [Screenshots](#screenshots)
7.  [API Documentation](#api-documentation)
8.  [Testing](#testing)
9.  [Acknowledgments](#acknowledgments)

* * * * *

Module Eight Journal
--------------------

### Architecture

This project utilized two distinct types of frontend development:

1.  **Express HTML with Handlebars:** The customer-facing website leverages server-side rendering with Handlebars for dynamic content generation. This approach is ideal for quickly rendering static content, ensuring a lightweight and efficient frontend.
2.  **Angular SPA:** The admin interface is built as a single-page application (SPA) using Angular. Unlike traditional web applications, the SPA offers a dynamic and rich user experience by rendering content on the client side. Features such as conditional rendering and state management make the SPA ideal for interactive applications like managing CRUD operations.

The backend relies on a **NoSQL MongoDB database**, chosen for its schema flexibility and ability to scale horizontally. MongoDB's JSON-like structure aligns naturally with the frontend's data consumption, enabling faster development and seamless integration with Mongoose for schema validation and queries.

* * * * *

### Functionality

**JSON** (JavaScript Object Notation) serves as a data exchange format between the frontend and backend. While JSON resembles JavaScript objects in syntax, it is purely a data format and does not include functions or methods. In this project, JSON was critical for passing structured data between the Angular frontend and the Express backend.

Throughout the development process, several instances of **code refactoring** enhanced functionality and efficiency:

-   **Reusable Components in Angular:** The `TripCardComponent` and `TripListingComponent` were refactored to modularize the UI. This approach reduced code duplication and ensured consistent behavior across the application.
-   **API Services:** The `TripDataService` centralized all API calls, simplifying maintenance and improving code readability.

The benefits of reusable components include:

-   **Scalability:** Easier to add new features.
-   **Consistency:** UI and functionality are uniform across the application.
-   **Maintainability:** Streamlined debugging and future enhancements.

* * * * *

### Testing

Testing was a crucial part of ensuring the application worked correctly:

-   **Backend Testing:** Using Postman, API endpoints were tested for both success and error scenarios. Authentication was validated by providing JWTs in the `Authorization` header for secure routes.
-   **Frontend Testing:** Angular components and services were manually tested for:
    -   Conditional rendering of admin-only features (e.g., "Add Trip" and "Edit Trip" buttons).
    -   Successful interaction with the backend to perform CRUD operations.
-   **Security Testing:** Authentication layers were tested to ensure only valid users could access admin routes. Invalid tokens and expired JWTs were handled gracefully to prevent unauthorized access.

Understanding methods and endpoints in a full stack application involves:

-   **Methods:** HTTP methods (GET, POST, PUT, DELETE) define the type of interaction with the database.
-   **Endpoints:** Define specific API routes for resource manipulation (e.g., `/api/trips`).
-   **Security:** JWT-based authentication ensures that sensitive routes are accessible only to authorized users.

* * * * *

### Reflection

This course has been instrumental in advancing my professional skills and aligning with my career goals as a full stack developer. I've gained hands-on experience in:

-   **Developing Full Stack Applications:** Building and integrating both frontend and backend components using industry-standard tools like the MEAN stack.
-   **Implementing Security Features:** Understanding the importance of JWT-based authentication and how to secure endpoints for authorized access.
-   **Database Management:** Leveraging MongoDB for efficient and scalable data storage while using Mongoose for schema validation.
-   **Building SPAs:** Creating dynamic, responsive, and feature-rich single-page applications using Angular.

Key skills developed during this course include:

-   **Modular Programming:** Refactoring components and services for maintainability and scalability.
-   **API Development and Testing:** Designing and securing RESTful APIs, as well as validating functionality using tools like Postman.
-   **Frontend-Backend Communication:** Establishing seamless data transfer and synchronization between client and server.

Overall, this course has significantly enhanced my ability to develop complex applications and provided me with a solid foundation in full stack development, making me a more marketable and confident candidate for roles in the tech industry. I feel prepared to tackle real-world challenges and contribute meaningfully to any development team.

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

1.  **Home Page**\
    ![Home Page](https://github.com/user-attachments/assets/886dfeec-e90b-4acd-a994-5e0752ad7ae3)

2.  **Trip Details**\
    ![Trips](https://github.com/user-attachments/assets/6fe20f81-429c-4b03-bb5f-ad5251604851)

### Admin Interface

1.  **Login Page**\
    ![Login Page](https://github.com/user-attachments/assets/04b69dd7-acb8-4899-97ea-12553fd10e57)

2.  **Admin Dashboard**\
    ![Successful Login Page](https://github.com/user-attachments/assets/a3677f04-e6d1-42a4-adfa-2c6c75759be5)

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

This project was completed as part of **CS 465: Full Stack Development** at **Southern New Hampshire University**. Special thanks to the instructors, especially Prof. Chipman, and course materials for guidance throughout the project.
