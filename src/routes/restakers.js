const express = require('express');
const router = express.Router();
const { getRestakers, syncRestakers } = require('../controllers/restakers');

router.get('/', getRestakers);       // GET /restakers
router.post('/sync', syncRestakers); // POST /restakers/sync

module.exports = router;
