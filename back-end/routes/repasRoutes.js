// mealRouter.js
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/repasUpload');
const {createRepas } = require('../controllers/repasController');

router.post('/save', upload.single('url_image'), createRepas );

module.exports = router;
