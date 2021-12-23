module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define(
    'pet',
    {
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true },
  );

  return Pet;
};
