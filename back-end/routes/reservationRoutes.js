// reservationRoutes.js
const express = require('express');
const router = express.Router();
const { createReservation } = require('../controllers/reservationController');
const reservationEmail = require('../middlewares/reservationEmail');
router.use( express.json());            
router.use( express.urlencoded({extended:true}));
router.post('/save',reservationEmail, createReservation);

module.exports = router;
