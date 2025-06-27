const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  user: { type: String, required: true },
  operator: { type: String, required: true },
  amount: { type: Number, required: true },
  txHash: { type: String, required: true, unique: true },
  blockNumber: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Restaker', RestakerSchema);
