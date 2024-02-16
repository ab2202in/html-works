const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/authcontroller');
const checkLogin = require('../utils/checkLogin').checkLogin;

router.post('/login', authcontroller.login);


module.exports = router;