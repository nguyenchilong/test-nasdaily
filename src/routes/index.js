
const express = require('express');
const carRoutes = require('./car');
const slotRoutes = require('./slot');
const bothRoutes = require('./both');
const router = express.Router();

/** GET /health-check  */
router.get('/health-check', (req, res) =>
  res.status(200).send('OK')
);
router.use('/car', carRoutes);
router.use('/slot', slotRoutes);

// use carId or slotId
router.use('/both', bothRoutes);

module.exports = router;