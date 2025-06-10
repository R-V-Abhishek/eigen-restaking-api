const express = require('express');
const router = express.Router();
const { getRewards } = require('../controllers/rewards');

router.get('/', getRewards);

module.exports = router;
