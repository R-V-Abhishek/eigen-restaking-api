const { fetchRestakers } = require('./restakers');

async function fetchRewardsByAddress(address) {
  if (!address) return { error: "Address required" };

  const allRestakers = await fetchRestakers();

  // Filter by user address (case-insensitive)
  const userRestakes = allRestakers.filter(r =>
    r.user.toLowerCase() === address.toLowerCase()
  );

  const rewardsByValidator = userRestakes.map(({ operator, amount }) => {
    const reward = amount * 0.05;  // Simulate 5% reward
    return { operator, reward: Number(reward.toFixed(4)) };
  });

  const totalRewards = rewardsByValidator.reduce((sum, r) => sum + r.reward, 0);

  return {
    address,
    totalRewards: Number(totalRewards.toFixed(4)),
    rewardsByValidator
  };
}

module.exports = { fetchRewardsByAddress };
