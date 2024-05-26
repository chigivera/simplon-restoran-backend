// mealRouter.js
const express = require('express');
const router = express.Router();

const upload = require('../middlewares/repasUpload');
const {createRepas, repasForm } = require('../controllers/repasController');


router.post('/save', upload.single('url_image'), createRepas );
router.get('/create', repasForm );

module.exports = router;
