const express = require('express');
const router = express.Router();

const default_controller = require('../controllers/default.controller');

router.get('/', default_controller.default);

module.exports = router;