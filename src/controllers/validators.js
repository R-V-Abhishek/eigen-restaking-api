const { fetchValidators } = require('../services/validators');

async function getValidators(req, res) {
  try {
    const validators = await fetchValidators();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
}

module.exports = { getValidators };
