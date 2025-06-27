const express = require('express');
const router = express.Router();
const { getValidators, syncValidators } = require('../controllers/validators');

router.get('/', getValidators);       // GET /validators
router.post('/sync', syncValidators); // POST /validators/sync

module.exports = router;
