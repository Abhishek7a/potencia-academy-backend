const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const careerController = require('../controllers/careerController');
const contactUsController = require('../controllers/contactUsController');

router.post('/register', registerController.handleNewUser);
router.post('/career', careerController.handleCareerUser);
router.post('/contactUs', contactUsController.handleContactUsUser);
// router.get("/check", (req,res) => res.status(201).json({message: "SetUp Success Yay!!"}));

module.exports = router;