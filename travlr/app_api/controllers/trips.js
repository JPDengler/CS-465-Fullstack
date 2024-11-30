const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    try {
        const q = await Model
            .find({}) // No filter, return all records
            .exec();

        // Uncomment the following line to show results of query
        // console.log(q);

        if (!q || q.length === 0) {
            // Database returned no data
            return res
                .status(404)
                .json({ message: "No trips found" });
        } else {
            // Return resulting trip list
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Server error", details: err });
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model
            .find({ 'code': req.params.tripCode }) // Return single record
            .exec();

        // Uncomment the following line to show results of query
        // console.log(q);

        if (!q || q.length === 0) {
            // Database returned no data
            return res
                .status(404)
                .json({ message: "Trip not found" });
        } else {
            // Return resulting trip
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Server error", details: err });
    }
};

// Export the functions
module.exports = {
    tripsList,
    tripsFindByCode,
};
