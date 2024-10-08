const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/add', eventController.addEvent);

module.exports = router;
