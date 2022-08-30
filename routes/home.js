// Handles intitial GET request for homepage
// Handles POST method request for adding new task

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// Add specific routes for specific tasks
router.get('/', homeController.getIndex); // GET homepage
router.post('/', homeController.createTask); // POST a new task

module.exports = router;