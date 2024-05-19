// contactRoutes.js
const express = require('express');
const router = express.Router();
const { submitContactMessage } = require('../controllers/contactController');

router.post('/save', submitContactMessage);

module.exports = router;
