const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(require('../middleware/upload.js'));

const registerController = require('../controllers/registerController');
const careerController = require('../controllers/careerController');
const contactUsController = require('../controllers/contactUsController');

// All Routes
router.post('/register', registerController.handleNewUser);
router.post('/career', upload.single('resume'),  careerController.handleCareerUser);
router.post('/contactUs', contactUsController.handleContactUsUser);

module.exports = router;