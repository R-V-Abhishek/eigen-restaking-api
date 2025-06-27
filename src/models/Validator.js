const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
  operator: { type: String, required: true, unique: true },
  totalStake: { type: Number, required: true },
  status: { type: String, default: 'active' },
  slashHistory: [
    {
      timestamp: { type: Number },
      amount: { type: Number }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Validator', ValidatorSchema);
