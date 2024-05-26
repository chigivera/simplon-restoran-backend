const express = require('express');
const router = express.Router();
const categorieSchema = require('../middlewares/validateCategory');
const { getCategories, getCategoryById, createCategory } = require('../controllers/categoryController');

// Get all categories
router.get('/', getCategories);

// Get a category by ID
router.get('/:id', getCategoryById);

// Create a new category
router.post('/save', createCategory);

module.exports = router;
