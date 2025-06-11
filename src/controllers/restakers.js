const { fetchRestakers } = require('../services/restakers');

async function getRestakers(req, res) {
  try {
    const restakers = await fetchRestakers();
    res.json(restakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
}

module.exports = { getRestakers };
