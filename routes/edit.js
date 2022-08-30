// Handles PUT method request for editing a task and deleting a task, as well as rendering the edit page

const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit');

// Add specific routes for specific tasks
router.get('/:id', editController.getEdit);
router.get('/remove/:id', editController.deleteTask);
router.post('/:id', editController.updateTask);

module.exports = router;