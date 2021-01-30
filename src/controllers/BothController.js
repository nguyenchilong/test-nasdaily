
const carModel = require('../data/car');
const slotModel = require('../data/slot');

/**
 * get all cars
 * @param {*} req 
 * @param {*} res 
 */
async function check(req, res) {
  try {
    let slot = await slotModel.findById(req.params.id);
    let car = await carModel.findById(req.params.id);
    if (!car && !slot) {
      return res
        .status(400)
        .json({ message: 'The ID not found' });
    }
    return res.json((slot || car));
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
};

module.exports = {
  check
};