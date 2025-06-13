const { fetchRewardsByAddress } = require('../services/rewards');

async function getRewardsByAddress(req, res) {
  try {
    const address = req.params.address;
    const rewards = await fetchRewardsByAddress(address);
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
}

module.exports = { getRewardsByAddress };
