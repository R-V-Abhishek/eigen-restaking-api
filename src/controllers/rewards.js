async function getRewards(req, res) {
  try {
    res.json({ message: 'Rewards list will appear here.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getRewards };
