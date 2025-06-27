const Validator = require('../models/Validator');
const { calculateValidatorsFromDB } = require('../services/validators');

async function getValidators(req, res) {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
}

async function syncValidators(req, res) {
  try {
    const validators = await calculateValidatorsFromDB();
    for (const v of validators) {
      await Validator.findOneAndUpdate(
        { operator: v.operator },
        v,
        { upsert: true }
      );
    }
    res.status(200).json({ message: 'Validators synced successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to sync validators' });
  }
}

module.exports = { getValidators, syncValidators };
