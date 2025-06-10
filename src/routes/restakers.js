const express = require('express');
const router = express.Router();
const { getRestakers } = require('../controllers/restakers');

router.get('/', getRestakers);

module.exports = router;
