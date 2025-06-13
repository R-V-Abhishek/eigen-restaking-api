const express = require('express');
const router = express.Router();
const { getRewardsByAddress } = require('../controllers/rewards');

router.get('/:address', getRewardsByAddress);

module.exports = router;
