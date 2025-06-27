const Restaker = require('../models/Restaker');
const { fetchRestakersFromChain } = require('../services/restakers');

async function getRestakers(req, res) {
  try {
    const restakers = await Restaker.find();
    res.json(restakers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
}

async function syncRestakers(req, res) {
  try {
    const data = await fetchRestakersFromChain();
    for (const entry of data) {
      await Restaker.findOneAndUpdate(
      { txHash: entry.txHash }, // unique tx
      entry,
      { upsert: true }
      );
    }
    res.status(200).json({ message: 'Restakers synced successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to sync restakers' });
  }
}

module.exports = { getRestakers, syncRestakers };