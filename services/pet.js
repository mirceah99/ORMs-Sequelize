const { pets } = require('../models/index');

exports.add = async ({ name, age }) => {
  const addedPet = await pets.create({
    name,
    age,
  });
  return addedPet;
};
