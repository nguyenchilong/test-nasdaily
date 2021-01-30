
const express = require('express');
const BothController = require('../controllers/BothController');

const router = express.Router();
router.get('/:id', BothController.check);

module.exports = router;