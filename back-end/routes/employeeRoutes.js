// employeeRouter.js
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/employeeUpload');
const {addEmployee, employeeForm} = require('../controllers/employeeController');

router.post('/save', upload.single('url_image'), addEmployee);
router.get('/create', employeeForm);


module.exports = router;
