const express = require('express');
const router = express.Router();
const { getValidators } = require('../controllers/validators');

router.get('/', getValidators);

module.exports = router;
