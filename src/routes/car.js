
const express = require('express');
const CarController = require('../controllers/CartController');

const router = express.Router();

// init data for test
router.get('/init', CarController.initData);
// find all car via GET /api/car
router.get('/', CarController.find);
// find car by id via GET /api/car/{id}
router.get('/:id', CarController.findById);

module.exports = router;