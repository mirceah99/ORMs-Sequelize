const PetService = require('../services/pet');
const logger = require('../logging/winston');

exports.add = async (req, res) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) Error.throw('invalid age or name');
    const addedPet = await PetService.add({ name, age });
    res.send(addedPet);
  } catch (error) {
    res.status(400).json(error.message);
    logger.error(error);
  }
};
