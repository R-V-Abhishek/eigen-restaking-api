const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  address: { type: String, required: true }, // user address
  totalRewards: { type: Number, required: true },
  rewardsByValidator: [
    {
      operator: { type: String, required: true },
      reward: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Reward', RewardSchema);
