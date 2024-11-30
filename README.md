# CS-465 Fullstack - Module 5: Dynamic API Integration and Front-End Updates

This branch includes the completed work for Module 5, focusing on extending the **Travlr Getaways** application by implementing dynamic API integration, refactoring front-end interactions, and enhancing error handling. This builds on the work from Module 4, transitioning from static JSON data to live database-driven content.

---
## Features Implemented
1. **Dynamic API Integration**
   - Replaced static JSON file-based data with dynamic API calls to retrieve data from the MongoDB database.
   - Introduced the `node-fetch` library to make HTTP requests from the server-side code.

2. **Extended API Functionality**
   - Added new API endpoints to `app_api/routes/index.js`:
     - `GET /api/trips` – Returns all trip data in JSON format.
     - `GET /api/trips/:tripCode` – Returns specific trip details based on the `tripCode` parameter.

3. **Controller Refactoring**
   - Updated the `travel.js` controller in `app_server/controllers`:
     - Replaced static JSON reads with asynchronous `fetch` calls to the new API endpoints.
     - Implemented error handling for:
       - Invalid API responses (e.g., non-array responses).
       - Empty arrays indicating no trips available in the database.
     - Logged critical operations for easier debugging.

4. **Front-End Updates**
   - Modified the `travel.hbs` Handlebars template to:
     - Dynamically link each trip to its specific API endpoint.
     - Use live data fetched from the database.

5. **Improved Error Handling**
   - Implemented conditions in the `travel.js` controller to handle:
     - API lookup errors.
     - Scenarios where no trips exist in the database.
   - Returned appropriate error messages to the client.

---
## How to Use
1. **Setup**
   - Ensure MongoDB is installed and running locally.
   - Clone the repository and switch to the `module5` branch:
     ```bash
     git clone https://github.com/JPDengler/CS-465-Fullstack.git
     cd CS-465-Fullstack
     git checkout module5
     ```

2. **Install Dependencies**
   - Install Node.js dependencies:
     ```bash
     npm install
     ```

3. **Seed the Database**
   - Populate the database with initial trip data:
     ```bash
     node app_api/seed.js
     ```

4. **Start the Server**
   - Run the application:
     ```bash
     npm start
     ```

5. **Access the Application**
   - Navigate to `http://localhost:3000` in your browser to view the updated **Travlr Getaways** application.

---
## About the Project

This module enhances the **Travlr Getaways** application by introducing dynamic API integration and improving modularity. Key updates include fetching data directly from the database, extending API endpoints, and transitioning the front-end to interact dynamically with the backend. These changes lay the foundation for robust, real-time web applications. 
