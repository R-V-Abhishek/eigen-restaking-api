const Restaker = require('../models/Restaker');

async function calculateRewardsForUser(address) {
  const restakers = await Restaker.find({ user: new RegExp(`^${address}$`, 'i') });

  const rewardsByValidator = restakers.map(({ operator, amount }) => {
    const reward = amount * 0.05;
    return {
      operator,
      reward: Number(reward.toFixed(4))
    };
  });

  const totalRewards = rewardsByValidator.reduce((acc, r) => acc + r.reward, 0);

  return {
    address,
    totalRewards: Number(totalRewards.toFixed(4)),
    rewardsByValidator
  };
}

module.exports = { calculateRewardsForUser };
// This service calculates rewards for a specific user based on their restaking data.