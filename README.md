# CS-465 Fullstack - Module 6: Full-Stack Integration with Add/Edit Functionality

This branch includes the completed work for Module 6, focusing on integrating full-stack functionality into the **Travlr Getaways** application. New features include adding trips, editing existing trips, and connecting the Angular front-end to the Express/MongoDB backend via a RESTful API.

---
## Features Implemented

1. **Add Trip Functionality**
   - Created a new Angular `add-trip` component.
   - Implemented a form for adding new trips with fields for:
     - Code
     - Name
     - Length
     - Start date
     - Resort
     - Per person price
     - Image name
     - Description
   - Connected the form to the backend `POST /api/trips` API endpoint via the `TripDataService`.

2. **Edit Trip Functionality**
   - Added an `edit-trip` component in Angular to edit existing trips.
   - Prepopulated the form with existing trip data by fetching it using the `GET /api/trips/:tripCode` endpoint.
   - Updated the trip using the `PUT /api/trips/:tripCode` API endpoint.

3. **Trip Card Updates**
   - Modified the `trip-card` component to include an "Edit Trip" button.
   - Clicking the button routes to the `edit-trip` component with the specific trip code stored in local storage.

4. **Backend Enhancements**
   - Added a `tripsUpdateTrip` method in `app_api/controllers/trips.js` to handle updating trips.
   - Updated routes in `app_api/routes/index.js` to include the `PUT` endpoint for updating trips.
   - Configured CORS in `app.js` to allow `PUT` HTTP methods.

5. **Improved Routing**
   - Updated `app.routes.ts` to include routes for the `add-trip` and `edit-trip` components.

6. **Enhanced Trip Listing**
   - Updated the `trip-listing` component to dynamically fetch trips from the backend and display them in a card format.
   - Included detailed trip information such as resort name, price, and duration.

---
## How to Use

### Setup
1. Clone the repository and switch to the `module6` branch:
   ```bash
   git clone https://github.com/JPDengler/CS-465-Fullstack.git
   cd CS-465-Fullstack
   git checkout module6
   
2. Install Dependencies
   - Install Node.js and Angular dependencies:
     ```bash
     npm install
     ```

3. Start Backend Server
   - Run the backend server:
     ```bash
     npm start
     ```

4. Start Angular Frontend
   - Run the Angular development server:
     ```bash
     ng serve
     ```

5. Access the Application
   - Open the application in your browser at:
     ```
     http://localhost:4200
     ```

### Adding a Trip
1. Navigate to the "Add Trip" page.
2. Fill out the form with trip details.
3. Click the "Save" button to add the trip to the database.

### Editing a Trip
1. Click the "Edit Trip" button on a trip card in the listing.
2. Update the fields in the prepopulated form.
3. Click "Save" to commit the changes.

### Viewing Trips
- View all trips on the home page in a card layout.

---
## API Endpoints

- **GET** `/api/trips` - Retrieve all trips.
- **GET** `/api/trips/:tripCode` - Retrieve a specific trip by its code.
- **POST** `/api/trips` - Add a new trip.
- **PUT** `/api/trips/:tripCode` - Update an existing trip by its code.

---
## Screenshots

1. **Trip Listing Page**
   ![Trip Listing Page](./Added%20-%20Edited%20new%20Trip.png)

2. **Add Trip Page**
   ![Add Trip Page](./AddTrip%20Page.png)

3. **Edit Trip Page**
   ![Edit Trip Page](./EditTrip%20Page.png)

---
## About the Project

This module enhances the **Travlr Getaways** application by implementing full-stack features, integrating Angular forms with RESTful APIs, and building a robust workflow for creating and updating trips. These improvements strengthen the application’s usability and set the stage for future enhancements.

---


