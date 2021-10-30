const { Router } = require('express');
const express = require('express');
const router = express.Router();

const controller = require('../controller/UserController');

router.get('/login/:correo/:contrasenna/', controller.login);

module.exports = router;