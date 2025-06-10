const express = require('express');
const router = express.Router();
const { getRewardsByAddress } = require('../controllers/rewards');

// :address makes it a dynamic route parameter
router.get('/:address', getRewardsByAddress);

module.exports = router;
