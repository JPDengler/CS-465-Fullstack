var express = require('express');
var router = express.Router();
var controller = require('../controllers/meals'); // Ensure correct path to the meals controller

/* GET meals page. */
router.get('/', controller.meals); 

module.exports = router;
