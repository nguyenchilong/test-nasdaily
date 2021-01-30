
const slotModel = require('../data/slot');

async function initData(req, res) {
  const data = [
    {
      name: 'Slot 1',
      code: 'SLOT_01_20210130',
      is_full: false,
      status: 1
    },
    {
        name: 'Slot 2',
        code: 'SLOT_02_20210130',
        is_full: false,
        status: 1
    },
    {
        name: 'Slot 3',
        code: 'SLOT_03_20210130',
        is_full: false,
        status: 1
    }
  ];
  try {
    let slots = await slotModel.insertMany(data);
    console.log(slots);
    if (!slots) {
      return res
        .status(400)
        .json({ message: 'Can not init data for test' });
    }
    return res.json(slots);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
}

/**
 * get all slot
 * @param {*} req 
 * @param {*} res 
 */
async function find(req, res) {
  try {
    let slots = await slotModel.find();
    if (!slots) {
      return res
        .status(400)
        .json({ message: 'List Slots is empty' });
    }
    return res.json(slots);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
}
/**
 * get slot with id
 * @param {*} req 
 * @param {*} res 
 */
async function findById(req, res) {
  try {
    let slot = await slotModel.findById(req.params.id);
    if (!slot) {
      return res
        .status(400)
        .json({ message: 'Slot not found' });
    }
    return res.json(slot);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
}

module.exports = {
  find,
  findById,
  initData
};