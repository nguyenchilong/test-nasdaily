
const express = require('express');
const SlotController = require('../controllers/SlotController');

const router = express.Router();

// init data for test
router.get('/init', SlotController.initData);
// find all car via GET /api/car
router.get('/', SlotController.find);
// find car by id via GET /api/car/{id}
router.get('/:id', SlotController.findById);

module.exports = router;