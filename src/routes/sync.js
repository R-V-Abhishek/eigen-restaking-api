const express = require('express');
const router = express.Router();

const { fetchRestakersFromChain } = require('../services/restakers');
const { calculateValidatorsFromDB } = require('../services/validators');
const { calculateRewardsForUser } = require('../services/rewards');

const Restaker = require('../models/Restaker');
const Validator = require('../models/Validator');
const Reward = require('../models/Reward');

router.post('/', async (req, res) => {
  try {
    // Sync restakers
    const restakers = await fetchRestakersFromChain();
    for (const r of restakers) {
      await Restaker.findOneAndUpdate({ txHash: r.txHash }, r, { upsert: true });
    }

    // Sync validators
    const validators = await calculateValidatorsFromDB();
    for (const v of validators) {
      await Validator.findOneAndUpdate({ operator: v.operator }, v, { upsert: true });
    }

    // Sync rewards (for each user found)
    const users = [...new Set(restakers.map(r => r.user))];
    for (const user of users) {
      const reward = await calculateRewardsForUser(user);
      await Reward.findOneAndUpdate({ address: user }, reward, { upsert: true });
    }

    res.status(200).json({ message: 'All data synced successfully' });
  } catch (err) {
    console.error("Error in /sync-all:", err.message);
    res.status(500).json({ error: 'Failed to sync all data' });
  }
});

module.exports = router;
