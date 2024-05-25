// newsletterRoutes.js
const express = require('express');
const router = express.Router();
const { subscribeToNewsletter } = require('../controllers/newsController');
const newsletterEmail = require('../middlewares/newsletterEmail');
router.use( express.json());            
router.use( express.urlencoded({extended:true}));
router.post('/save',newsletterEmail ,subscribeToNewsletter);

module.exports = router;
