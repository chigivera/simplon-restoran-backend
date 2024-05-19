const express = require('express');
const router = express.Router();
const validateRestaurant = require('../middlewares/validateRestaurant');
const { createRestaurant,getRestaurantById,getRestaurants } = require('../controllers/restaurantController');

router.post('/save', validateRestaurant, createRestaurant);
router.get('/:id', getRestaurantById);
router.get('/', getRestaurants);


module.exports = router;
