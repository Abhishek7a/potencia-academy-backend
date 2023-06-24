const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const careerController = require('../controllers/careerController');

router.post('/register', registerController.handleNewUser);
router.post('/career', careerController.handleCareerUser);

module.exports = router;