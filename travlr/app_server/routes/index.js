var express = require('express');
var router = express.Router();
const ctrlMain = require('C:/Users/Jdeng/OneDrive/Documents/CS-465-Fullstack/travlr/app_server/controllers/main'); // Reference to the controller

// GET home page and delegate rendering to the controller
router.get('/', ctrlMain.index);

module.exports = router;