// contactRoutes.js
const express = require('express');
const router = express.Router();
const { submitContactMessage } = require('../controllers/contactController');
const contactEmail = require('../middlewares/contactEmail');

router.post('/save',contactEmail, submitContactMessage);

module.exports = router;
