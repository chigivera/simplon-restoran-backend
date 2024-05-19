// newsletterRoutes.js
const express = require('express');
const router = express.Router();
const { subscribeToNewsletter } = require('../controllers/newsController');

router.post('/save', subscribeToNewsletter);

module.exports = router;
