# CS-465 Fullstack - Module 4: Database and API Integration

This branch includes the completed work for Module 4, focusing on setting up the database layer and enabling API integration for the **Travlr Getaways** application. This implementation incorporates a NoSQL database, MongoDB, to manage and serve data dynamically.

---

## Features Implemented

1. **Database Access Module**  
   - Created a `db.js` module to connect to MongoDB using the Mongoose package library. 
   - Configured error handling for robust database interactions.

2. **Schema and API Integration**  
   - Designed a Mongoose schema for the `Trip` collection, including validation rules for fields like:
     - `name`
     - `code`
     - `start`
     - `length`
     - `perPerson`
     - `resort`
     - `description`
   - Implemented logic to retrieve and serve data in JSON format.

3. **Seeding the Database**  
   - Updated `trips.json` with additional attributes for `code`, `length`, `start`, `resort`, and `perPerson`.
   - Created `seed.js` to populate the database programmatically from `trips.json`.

4. **Testing the Database**  
   - Verified the database setup using **MongoDB Compass**, confirming proper insertion of sample `Trip` data.

---

## How to Use

1. **Setup**
   - Ensure MongoDB is installed and running locally.
   - Update connection details in `db.js` if needed.

2. **Seeding the Database**
   - Run the following command to seed the database with `trips.json` data:
     ```bash
     node app_server/models/seed.js
     ```

3. **Verify Data**
   - Use a database inspection tool like **MongoDB Compass** to confirm the data.

---

## Screenshot
![MongoDB Compass Screenshot](Screenshot%202024-11-24%20102506.png)

---

## About the Project

Dynamic full-stack application showcasing MongoDB integration, Mongoose schemas, and RESTful API development. This module sets the foundation for backend data management, enabling dynamic content for **Travlr Getaways**.
