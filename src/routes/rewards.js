const express = require('express');
const router = express.Router();
const { getRewardsByAddress } = require('../controllers/rewards');

router.get('/:address', getRewardsByAddress); // GET /rewards/:address

module.exports = router;