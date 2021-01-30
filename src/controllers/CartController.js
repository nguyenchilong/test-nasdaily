
const carModel = require('../data/car');

async function initData(req, res) {
  const data = [
    {
      name: 'Ford 2020',
      number: 'UNI_C1_20210130',
      brand: 'Ford',
      model: 'X02-2021',
      status: 1
    },
    {
      name: 'Ford 2020 - 2',
      number: 'UNI_C2_20210130',
      brand: 'Ford',
      model: 'X02-2021',
      status: 1
    },
    {
      name: 'Ford 2020 - 3',
      number: 'UNI_C3_20210130',
      brand: 'Ford',
      model: 'X02-2021',
      status: 1
    }
  ];
  try {
    let cars = await carModel.insertMany(data);
    console.log(cars);
    if (!cars) {
      return res
        .status(400)
        .json({ message: 'Can not init data for test' });
    }
    return res.json(cars);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
}

/**
 * get all cars
 * @param {*} req 
 * @param {*} res 
 */
async function find(req, res) {
  try {
    let cars = await carModel.find();
    if (!cars) {
      return res
        .status(400)
        .json({ message: 'List Cars is empty' });
    }
    return res.json(cars);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
};

/**
 * get car by id
 * @param {*} req 
 * @param {*} res 
 */
async function findById(req, res) {
  try {
    let car = await carModel.findById(req.params.id);
    if (!car) {
      return res
        .status(400)
        .json({ message: 'Car not found' });
    }
    return res.json(car);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.toString() });
  }
};

module.exports = {
  find,
  findById,
  initData
};