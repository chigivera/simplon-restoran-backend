// employeeRouter.js
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/employeeUpload');
const employeeController = require('../controllers/employeeController');

router.post('/save', upload.single('url_image'), employeeController.addEmployee);

module.exports = router;
