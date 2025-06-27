const Reward = require('../models/Reward');
const { calculateRewardsForUser } = require('../services/rewards');

async function getRewardsByAddress(req, res) {
  try {
    const address = req.params.address.toLowerCase();
    let reward = await Reward.findOne({ address });

    if (!reward) {
      reward = await calculateRewardsForUser(address);
      await Reward.findOneAndUpdate({ address }, reward, { upsert: true });
    }

    res.json(reward);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
}

module.exports = { getRewardsByAddress };