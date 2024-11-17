# CS-465-Fullstack - Module 3

This branch contains the completed implementation for **Module 3**, featuring dynamic JSON functionality for the **Travel**, **Rooms**, and **Meals** pages. The project highlights converting static HTML to Handlebars templates for better scalability and maintainability.

---

## Features Implemented

### Dynamic JSON Functionality
- **Travel Page**:
  - Displays a list of destinations dynamically fetched from `trips.json`.
  - Each destination includes an image, name, and description.

- **Meals Page**:
  - Displays three distinct sections for seafood, desserts, and buffets.
  - Content dynamically populated from `meals.json` with corresponding hover and styling effects.

- **Rooms Page**:
  - Features a list of room types dynamically populated from `rooms.json`.
  - Each entry includes an image, title, description, and rate per day.

---

## Handlebars Template Integration

Converted the following static HTML pages to use Handlebars:
- `travel.hbs`
- `meals.hbs`
- `rooms.hbs`

Dynamic JSON data was fetched via the `fs` module in Node.js and rendered using the Handlebars templating engine.

---

## File Structure Updates
- **Controllers**:
  - Added `travel.js`, `meals.js`, and `rooms.js` for serving dynamic pages.
- **Routes**:
  - Updated `travel.js`, added `meals.js` and `rooms.js`.
- **Data**:
  - Created JSON files for dynamic data:
    - `trips.json`
    - `meals.json`
    - `rooms.json`
- **Partials**:
  - Updated `header.hbs` to dynamically assign the active tab based on the page.
  - Created reusable templates for consistent design.

---

## Technologies Used
- **Node.js** with **Express.js**
- **Handlebars** for templating
- **JSON** for data storage
- **HTML/CSS** for design

